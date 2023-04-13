import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { randomName, randomColor } from "../../utils/utils";

const Chat = () => {
    const [user, setUser] = useState([]);
    const [messages, setMessages] = useState([]);
    const [drone, setDrone] = useState(null);
    const [room, setRoom] = useState(false);

    useEffect(() => {
        if (user.username !== "") {
            const drone = new window.Scaledrone('cG3HuR7GIhCwzmNN', {
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



        }
    })

        
        const room = drone.subscribe('room_name');

        room.on('open', error => {
            if (error) {
                return console.error(error);
            }
        // Connected to room
        });

    room.on('message', message => {
    // Received a message sent to the room
    });
};

export default Chat;