import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";


import TyrylginTAPage from "../StudentPage/TyrylginTA/TyrylginTAPage";
import {default as TyrylginTest1Page} from "../StudentPage/TyrylginTA/Test1/Test1Page";
import {default as TyrylginTest2Page} from '../StudentPage/TyrylginTA/Test2/Test2Page';

import Amit from '../StudentPage/Amit/AmitPage';
import {default as MtTest1Page} from "../StudentPage/Amit/Test1/Test1Page";
import {default as MtTest2Page} from "../StudentPage/Amit/Test2/Test2Page";

import OkhotnikovLeonidPage from "../StudentPage/OkhotnikovLeonid/OkhotnikovLeonid";
import {default as OhTest1Page} from "../StudentPage/OkhotnikovLeonid/Test1/Test1Page";
import {default as OhTest2Page} from "../StudentPage/OkhotnikovLeonid/Test2/Test2Page";

import ProkhorovMihailPage from "../StudentPage/ProkhorovMihail/ProkhorovMihailPage";
import {default as PrTest1Page} from "../StudentPage/ProkhorovMihail/Test1/Test1Page";
import {default as PrTest2Page} from "../StudentPage/ProkhorovMihail/Test2/Test2Page";

import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import { default as KrCategoryPage } from "../StudentPage/KryuchkovNick/Category/CategoryPage";
import { default as KrClientPage } from "../StudentPage/KryuchkovNick/Client/ClientPage";
import { default as KrManufacturerPage } from "../StudentPage/KryuchkovNick/Manufacturer/ManufacturerPage";
import { default as KrProductPage } from "../StudentPage/KryuchkovNick/Product/ProductPage";
import { default as KrOrderPage } from "../StudentPage/KryuchkovNick/Order/OrderPage";




const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                
                    <Route index element={<StudentsPage/>} />
                    
                    <Route path={'Tyrylgin'} element={<TyrylginTAPage/>} >
                        <Route path={'test1'} element={<TyrylginTest1Page/>}/>
                        <Route path={'test2'} element={<TyrylginTest2Page/>}/>
                    </Route>

                    <Route path={'Amit'} element={<Amit/>} >
                        <Route path={'Test1'} element={<MtTest1Page/>} />
                        <Route path={'Test2'} element={<MtTest2Page/>} />
                    </Route>

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} >
                        <Route path={'category'} element={<KrCategoryPage/>} />
                        <Route path={'client'} element={<KrClientPage/>} />
                        <Route path={'manufacturer'} element={<KrManufacturerPage/>} />
                        <Route path={'product'} element={<KrProductPage/>} />
                        <Route path={'order'} element={<KrOrderPage/>} />

                    </Route>

                    <Route path={'okhotnikov'} element={<OkhotnikovLeonidPage/>} >
                        <Route path={'Test1'} element={<OhTest1Page/>}/>
                        <Route path={'Test2'} element={<OhTest2Page/>}/>
                    </Route>

                    <Route path={'Prokhorov'} element={<ProkhorovMihailPage/>}>
                        <Route path={'test1'} element={<PrTest1Page/>}/>
                        <Route path={'test2'} element={<PrTest2Page/>}/>
                    </Route>

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;