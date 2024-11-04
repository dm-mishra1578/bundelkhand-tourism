import React from 'react';
import Home from '../container/home/HomeConatiner';
import Banda from '../pages/destination/banda/Banda';
import Chitrakoot from '../pages/destination/chitrakoot/Chitrakoot';
import Galary from '../pages/galary/GalaryPage'
import Histoy from '../pages/history/HistoyPage';
import BandaPage from '../pages/destination/banda/Banda';
export const routeMap = [
    {
        _id: 1,
        Name: "home",
        URL: "/",
        element: Home,
    },
    {
        _id: 2,
        Name: "Galary",
        URL: "/galary",
         element:Galary,
    },
    {
        _id: 3,
        Name: "History",
        URL: "/history",
        element:Histoy,
    },
    {
        _id: 4,
        Name: "chitrakoot",
        URL: "/chitrakoot",
         element:Chitrakoot,
    },
    {
        _id: 5,
        Name: "banda",
        URL: "/banda",
         element:BandaPage,
    },
];
