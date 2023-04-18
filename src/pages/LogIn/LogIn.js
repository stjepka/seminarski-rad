import React, { useEffect, useState } from 'react';
import { AppWrapper, HeaderWrapper, HeaderInner, LogInWrapper, FooterWrapper,MessageInput, Button, MainWrapper } from "../../utils/defaultStyles";
//import Iframe from "react-iframe";
import { randomName, randomColor, clientID } from "../../utils/utils";
import Messages from '../../components/Messages/Messages';


const LogIn = () => {
    const [user, setUser] = useState([]);
    const [messages, setMessages] = useState([]);
    const [drone, setDrone] = useState(null);
    const [room, setRoom] = useState(false);

    useEffect(() => {
        if (user.username !== "") {
            const drone = new window.Scaledrone(clientID, {
                data: user,
            });
            setDrone(drone);
        }
    }, [user]);


    useEffect(() => {
        const droneEvents = () => {
            drone.on("open", (error) => {
                if (error) {
                    return console.error(error);
                }
                user.username = randomName();
                user.color = randomColor();
                setUser(user);
                roomEvents();
            });

            drone.on("error", (error) => console.error(error));
            drone.on("disconnect", () => {
                console.log(
                    "Disconnected, Scaledrone reconnect"
                );
            });
            drone.on("reconnect", () => {
                console.log("Reconnected");
            });
        };

        const roomEvents = () => {
            const room = drone.subscribe("observable-room");
            room.on("open", (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("In the room");
                    setRoom(true);
                }
            });
            room.on("message", (message) => {
                recieveMsg(message);
            });
        };

        const recieveMsg = (message) => {
            setMessages(messages =>[...messages,message]);
        };

        if(drone && !user.username) {
            droneEvents();
        }

    }, [drone, user, room, messages]);

    const handleSend = (e) => {
        e.preventDefault();
        let messText = document.querySelector("input").value;
        let msg = {
            message: messText,
            name: user.username,
            color: user.color,
        }
        drone.publish({
            room: 'observable-room',
            message: msg
        });
        document.querySelector("input").value="";
    }

    return (
        <AppWrapper>
            <LogInWrapper>
                <HeaderWrapper>
                    <HeaderInner>
                        Your username: {user.username}
                    </HeaderInner>
                </HeaderWrapper>
                <MainWrapper className="Messages">
                    {
                        messages ?
                        messages.map((message) => (
                            <Messages
                                key={message.id}
                                messages={message}
                                currentUser={user}
                            />
                        ))
                        : ""
                    }
                </MainWrapper>
                <FooterWrapper>
                    <MessageInput
                    type="text"
                    placeholder="What's on your mind?">
                    </MessageInput>
                    <Button onClick={handleSend}>Send</Button>
                </FooterWrapper>
            </LogInWrapper>
            {/* <Iframe url="https://chattereact.vercel.app/frame"
            width="100%"
            height="100%"
            display="block"
            position="relative"/> */}
        </AppWrapper>
    ) 
}

export default LogIn;