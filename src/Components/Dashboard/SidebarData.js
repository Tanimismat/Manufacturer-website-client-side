import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
    {
        title:"My Orders" ,
        icon: <FaIcons.FaShoppingCart />,
        link: "/myorders"
    },
    {
        title:"My Profile" ,
        icon: <CgIcons.CgProfile />,
        link: "/myprofile" 
    },
    {
        title:"Add Review" ,
        icon: <MdIcons.MdOutlineReviews />,
        link: "/addreview"
    }
] 
    
