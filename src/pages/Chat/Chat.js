import React, { useState, useEffect } from 'react';
import { HeaderInner, HeaderWrapper,MessageInput,Button,FooterWrapper,MainWrapper } from '../../utils/defaultStyles'
import { randomName, randomColor, clientID } from "../../utils/utils";
import Messages from '../../components/Messages/Messages';


const Chat = () => {
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
            const room = drone.subscribe(`observable-room`);
            room.on("open", (error) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("In the room frame");
                    setRoom(true);
                }
            });
            room.on("message", (message) => {
                receiveMsg(message);
            });
        };

        const receiveMsg = (message) => {
            setMessages(messages =>[...messages,message]);
        };

        if (drone && !user.username) {
            droneEvents();
        }
          
    }, [drone, user, room, messages]);

    const handleSend = (e) => {
        e.preventDefault();
        let messText = document.querySelector("input").value;
        let msg = {message: messText, name: user.username,color:user.color}
        drone.publish({
            room: 'observable-room',
            message: msg
        });
        document.querySelector("input").value="";
    }

    return (
        <>
        <HeaderWrapper>
            <HeaderInner>
                Welcome, {user.username}!
            </HeaderInner>
        </HeaderWrapper>
        <MainWrapper className="Messages">
            {messages.map((message, index) => {
                return (
                    <Messages
                        key={index}
                        messages={message}
                        currentUser={user}
                    />
                );
            })}
        </MainWrapper>
        <FooterWrapper>
            <MessageInput
                type="text"
                placeholder="What's on your mind?"
            />
            <Button onClick={handleSend}>Send</Button>
        </FooterWrapper>
        </>
    ) 
    }

export default Chat;