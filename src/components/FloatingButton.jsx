import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5"; 
import Chatlogo from '../assets/Chatlogo.png'; 
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const FloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [buttonPosition, setButtonPosition] = useState('translate-x-12'); // Initial position off-screen
    const [showTooltip, setShowTooltip] = useState(false); // State to control tooltip visibility

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations
        });

        // Animate the button on component mount
        const timer = setTimeout(() => {
            setButtonPosition('translate-x-0'); // Move the button into view
        }, 300); // Delay to allow for initial render

        // Show tooltip after 1 second
        const tooltipTimer = setTimeout(() => {
            setShowTooltip(true); // Show tooltip after 1 second
        }, 1000); // Adjust the time (in milliseconds) as needed

        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer); // Clear tooltip timer on unmount
        };
    }, []);

    // Handle click to open the chat
    const handleClick = () => {
        setIsOpen(true);
        setShowTooltip(false); // Hide tooltip when chat is opened
    };

    // Handle closing the chat
    const handleClose = () => {
        setIsOpen(false);
        setMessages([]); // Optionally clear messages on close
        setInput('');
    };

    // Handle message submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            const userMessage = { text: input, sender: 'user' };
            setMessages((prev) => [...prev, userMessage]);

            const botResponse = await fakeChatbotAPI(input);
            setMessages((prev) => [...prev, { text: botResponse, sender: 'bot' }]);
            setInput(''); // Clear input after submission
        }
    };

    // Simulated API for chatbot response
    const fakeChatbotAPI = (message) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Bot: You said "${message}"`);
            }, 1000);
        });
    };

    return (
        <div>
            {/* Floating button to open chat */}
            <div
                className={`fixed bottom-6 right-6 bg-green-700 rounded-full p-4 cursor-pointer transition-transform filter drop-shadow-lg duration-300 
                    ${buttonPosition}`}
                onClick={handleClick}
                style={{ zIndex: 9999 }} // Bring button to the front
            >
                <IoChatbubbles className="text-white w-8 h-8" />
                {/* Tooltip message */}
                {showTooltip && ( // Show tooltip only if showTooltip is true
                    <div className="absolute bottom-full right-1 bg-gray-700 text-white text-xs rounded p-1 transform translate-y-1/2 translate-x-1/2" style={{width: "138px", marginBottom:"17px", marginRight:"37px"}}>
                        Hi, how can I help you?
                    </div>
                )}
            </div>

            {/* Chatbox that appears when isOpen is true */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300" style={{ zIndex: 10000 }}>
                    <div
                        className="bg-white rounded-lg p-6 shadow-lg w-80 transform transition-transform duration-300 relative opacity-100"
                        data-aos="slide-right" // AOS animation attribute for sliding in
                    >
                        <div className='flex items-center'>
                            <img src={Chatlogo} alt="Chat Logo" className="mr-2" />
                            <h2 className="text-lg font-bold" style={{color: '#4a9561'}}>LiveChat</h2>
                        </div>
                        <div className="h-64 overflow-y-auto p-2">
                            {/* Display messages */}
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                                >
                                    <span
                                        className={`inline-block rounded px-3 py-1 ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
                                    >
                                        {msg.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="p-2 pt-3 absolute top-0 right-0"
                            >
                                <IoClose />
                            </button>
                            <div className='relative flex m-3'>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="border rounded w-full p-2 mb-0"
                                    placeholder="Type your message..."
                                />
                                <button
                                    type="submit"
                                    className="text-gray-400 rounded p-2 ml-2"
                                >
                                    <IoIosSend />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingButton;
