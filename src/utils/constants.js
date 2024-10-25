import React from 'react';
import Home from '../container/home/HomeConatiner';
import Banda from '../pages/destination/banda/Banda';
import Chitrakoot from '../pages/destination/chitrakoot/Chitrakoot';
export const routeMap = [
    {
        _id: 1,
        Name: "home",
        URL: "/",
        element: Home,
    },
    {
        _id: 2,
        Name: "destination/banda",
        URL: "/destination/banda",
         element:Banda,
    },
    {
        _id: 2,
        Name: "destination/chitrakoot",
        URL: "/destination/chitrakoot",
         element:Chitrakoot,
    }
];
