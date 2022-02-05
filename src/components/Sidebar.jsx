import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome, FaUsers } from "react-icons/fa";
import { BiAnalyse, BiCart, BiSearch } from "react-icons/bi";
import { MdAdminPanelSettings, MdMessage } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const routes = [
    {path: '/', name: 'Home', icon: <FaHome />},
    {path: '/analytic', name: 'Analytics', icon: <BiAnalyse />},
    {path: '/users', name: 'Users', icon: <FaUsers />},
    {path: '/messages', name: 'Messgaes', icon: <MdMessage />},
    {path: '/fileManager', name: 'FileManager', icon: <AiTwotoneFileExclamation />},
    {path: '/orders', name: 'Order', icon: <BiCart />},
    {path: '/saved', name: 'Saved', icon: <AiFillHeart />},
    {path: '/settings', name: 'Settings', icon: <MdAdminPanelSettings />}
];
const Sidebar = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const inputAnimateion = {
        hide: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration: 0.5
            }
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    };
    const linkAnimation = {
        hide: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5
            }
        },
        show: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    };

    return <div className="main-container">
        <motion.div 
            animate={{ 
                width: isOpen ? "200px": "35px",  
                transition: {
                    duration: 0.5,
                    type:"spring",
                    damping: 10
                }
            }} 
            className="sidebar">
            <div className="top-section">
                {isOpen && <motion.h1 
                    initial="hide"
                    animate="show"
                    exit="hide"
                    variants={linkAnimation} className="logo">Do Some coding</motion.h1>}
                <div className="bars">
                    <FaBars onClick={toggle} />
                </div>
            </div>
            <div className="search">
                <div className="search-icon">
                    <BiSearch />
                </div>
                <AnimatePresence>
                    { isOpen && <motion.input 
                    initial="hide"
                    animate="show"
                    exit="hide"
                    variants={inputAnimateion} placeholder="Search..." /> }
                </AnimatePresence>
                
            </div>
            <section className="routes">
                {routes.map((route) => (
                    <NavLink 
                        activeclassname="active"
                        to={route.path} 
                        key={route.name} 
                        className="link">
                            <div className="icon">{route.icon}</div>
                            <AnimatePresence>
                                { isOpen && <motion.div
                                initial="hide"
                                animate="show"
                                exit="hide"
                                variants={linkAnimation}
                                className="link-text">{route.name} </motion.div>
                                }
                            </AnimatePresence>
                    </NavLink>
                ))}
            </section>
        </motion.div>
        <main>
            {children}
        </main>
    </div>
};

export default Sidebar;