import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAngleDown } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SidebarMenu = ({ linkAnimation, isOpen, route }) => {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  const toggleMenu = () => SetIsMenuOpen(!isMenuOpen);
  const linkAnimationMenuItem = {
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
  return (
    <>
    <div className="menu" onClick={toggleMenu}>
      <div className="menu_item">
        <div className="icon">{route.icon}</div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hide"
              animate="show"
              exit="hide"
              variants={linkAnimation}
              className="link-text">{route.name}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div>
        <FaAngleDown />
      </div>
    </div>
    {isMenuOpen && (
      <motion.div className="menu-container">
        {route.subRoutes.map((subroute, i) => {
          return (
            <NavLink
              activeclassname="active"
              to={subroute.path}
              key={i}
              className="link"
            >
              <div className="icon">{subroute.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial="hide"
                    animate="show"
                    exit="hide"
                    variants={linkAnimation}
                    className="link-text">{subroute.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          )
        })}
      </motion.div>
    )}
    </>
  )
}

export default SidebarMenu;