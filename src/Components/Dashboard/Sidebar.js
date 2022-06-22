import React from 'react';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
    return (
        <div>
            <ul>
                {
                    SidebarData.map((value, key) => {
                        return (
                            <li key={key}>
                                <div>{ value.icon}</div>
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