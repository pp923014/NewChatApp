// import React, { useEffect, useRef } from 'react'
// import {useSelector} from "react-redux";

// const Message = ({message}) => {
//     const scroll = useRef();
//     const {authUser,selectedUser} = useSelector(store=>store.user);

//     useEffect(()=>{
//         scroll.current?.scrollIntoView({behavior:"smooth"});
//     },[message]);
    
//     return (
//         <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
//             <div className="chat-image avatar">
//                 <div className="w-10 rounded-full">
//                     <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilePhoto  : selectedUser?.profilePhoto } />
//                 </div>
//             </div>
//             <div className="chat-header">
//                 <time className="text-xs opacity-50 text-white">12:45</time>
//             </div>
//             <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''} `}>{message?.message}</div>
//         </div>
//     )
// }

// export default Message

import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { format } from 'date-fns';

const Message = ({ message }) => {
    const scroll = useRef();
    const { authUser, selectedUser } = useSelector(store => store.user);
    const isCurrentUser = message?.senderId === authUser?._id;

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div 
            ref={scroll}
            className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-3`}
        >
            <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                isCurrentUser 
                    ? 'bg-yellow-500 text-white rounded-br-none' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-bl-none'
            }`}>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {format(new Date(message?.createdAt || Date.now()), 'h:mm a')}
                </div>
                <div>{message?.message}</div>
            </div>
        </div>
    );
};

export default Message;