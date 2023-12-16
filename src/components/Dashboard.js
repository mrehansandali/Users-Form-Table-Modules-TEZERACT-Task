import React, { useState, useEffect } from 'react';
import Modules from './modules/Modules';
import './styles.css';
import menuIcon from "../assets/menuIcon.svg"
import formIcon from "../assets/userform.svg"
import tableIcon from "../assets/userTable.svg"

const Dashboard = () => {
    const [selectedModule, setSelectedModule] = useState('User Form');
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleItemClick = (moduleName) => {
        setSelectedModule(moduleName);
        if (windowWidth <= 768) {
            setIsMobileSidebarOpen(false);
        }
    };

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="mobile-menu-icon" onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}>
                    <img src={menuIcon} alt="menuIcon" />
                </div>
                <ul className={`navigation ${windowWidth <= 768 && isMobileSidebarOpen ? 'open' : ''}`}>
                    <li className={selectedModule === 'User Form' ? 'active' : ''} onClick={() => handleItemClick('User Form')}>
                        <span><img src={formIcon} alt="icon" /></span> User Form
                    </li>
                    <li className={selectedModule === 'User Table' ? 'active' : ''} onClick={() => handleItemClick('User Table')}>
                        <span><img src={tableIcon} alt="icon" /></span> User Table
                    </li>
                </ul>
            </div>
            <div className="main-section">
                <Modules selectedModule={selectedModule} />
            </div>
        </div>
    );
};

export default Dashboard;
