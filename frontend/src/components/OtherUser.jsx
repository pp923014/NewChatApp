// import React from 'react'
// import { useDispatch,useSelector } from "react-redux";
// import { setSelectedUser } from '../redux/userSlice';

// const OtherUser = ({ user }) => {
//     const dispatch = useDispatch();
//     const {selectedUser, onlineUsers} = useSelector(store=>store.user);
//     const isOnline = onlineUsers?.includes(user._id);
//     const selectedUserHandler = (user) => {
//         dispatch(setSelectedUser(user));
//     }
//     return (
//         <>
//             <div onClick={() => selectedUserHandler(user)} className={` ${selectedUser?._id === user?._id ? 'bg-green-200 text-black' : 'text-white'} flex gap-2 hover:text-black items-center hover:bg-zinc-200 rounded p-2 cursor-pointer`}>
//                 <div className={`avatar ${isOnline ? 'online' : '' }`}>
//                     <div className='w-12 rounded-full'>
//                         <img src={user?.profilePhoto} alt="user-profile" />
//                     </div>
//                 </div>
//                 <div className='flex flex-col flex-1'>
//                     <div className='flex justify-between gap-2 '>
//                         <p>{user?.fullName}</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='divider my-0 py-0 h-1'></div>
//         </>
//     )
// }

// export default OtherUser

import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';
import { motion } from 'framer-motion';

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const { selectedUser, onlineUsers } = useSelector(store => store.user);
    const isOnline = onlineUsers?.includes(user._id);
    const isSelected = selectedUser?._id === user?._id;

    const selectedUserHandler = () => {
        dispatch(setSelectedUser(user));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full"
        >
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={selectedUserHandler}
                className={`flex items-center p-3 cursor-pointer transition-colors ${
                    isSelected 
                        ? 'bg-green-100 dark:bg-green-900/20' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                } rounded-lg`}
            >
                {/* Online status indicator */}
                <div className="relative mr-3">
                    <div className={`w-3 h-3 rounded-full ${
                        isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                </div>

                <div className='flex-1 min-w-0'>
                    <p className={`font-medium truncate ${
                        isSelected 
                            ? 'text-green-700 dark:text-green-300' 
                            : 'text-gray-800 dark:text-gray-200'
                    }`}>
                        {user?.fullName}
                    </p>
                </div>

                {isSelected && (
                    <motion.div 
                        layoutId="activeUserIndicator"
                        className="w-1.5 h-6 bg-green-500 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                )}
            </motion.div>
            <div className='divider my-0 h-px bg-gray-200 dark:bg-gray-700'></div>
        </motion.div>
    );
};

export default OtherUser;