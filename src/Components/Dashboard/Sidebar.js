import React from 'react';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <ul className="sidebar-list">
                {
                    SidebarData.map((value, key) => {
                        return (
                            <li key={key}
                                className="sidebar-list-item"
                                onClick={() => {
                                    window.location.pathname = value.link;
                                }}
                            >
                                <div className="icons">{ value.icon}</div>
                                <div>{ value.title}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Sidebar;