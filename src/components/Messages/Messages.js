import React from "react";
import { MessageDiv, MessageDivContent } from "../../utils/defaultStyles";

const Messages = ({messages, currentUser}) => {
    return (
        <>
        {messages ?
            (messages.data.name===currentUser.username) ?
                <MessageDiv usersMessage className="Message">
                    <MessageDivContent color={messages.data.color}>
                        <div>
                            User: {messages.data.name}
                        </div>
                        <div>
                            Message: {messages.data.message}
                        </div>
                    </MessageDivContent>
                </MessageDiv>
                 : 
                <MessageDiv notUsersMessage className='Message'>
                    <MessageDivContent color={messages.data.color}>
                        <div>
                            User: {messages.data.name}
                        </div>
                        <div>
                            Message: {messages.data.message}
                        </div>
                    </MessageDivContent>
                 </MessageDiv>
           
                 : 
                <MessageDiv className='Message DefaultMessage' color={currentMember.color}>
                </MessageDiv>
        }
        </>
    )
}