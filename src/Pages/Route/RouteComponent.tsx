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
/*import {default as MtTest1Page} from "../StudentPage/Amit/Test1/Test1Page";
import { default as MtTest2Page } from "../StudentPage/Amit/Test2/Test2Page";*/
import { default as MtUser } from "../StudentPage/Amit/User/User";
import { default as MtProduct } from "../StudentPage/Amit/Product/Product";
import { default as MtManufacturer } from "../StudentPage/Amit/Manufacturer/Manufacturer";
import { default as MtClient } from "../StudentPage/Amit/Client/Client";
import { default as MtCategory } from "../StudentPage/Amit/Category/Category";


import OkhotnikovLeonidPage from "../StudentPage/OkhotnikovLeonid/OkhotnikovLeonid";
import {default as OhTest1Page} from "../StudentPage/OkhotnikovLeonid/Category/CategoryPage";
import {default as OhTest2Page} from "../StudentPage/OkhotnikovLeonid/Client/ClientPage";
import {default as OhTest3Page} from "../StudentPage/OkhotnikovLeonid/Manufacturer/ManufacturerPage";
import {default as OhTest4Page} from "../StudentPage/OkhotnikovLeonid/Product/ProductPage";
import {default as OhTest5Page} from "../StudentPage/OkhotnikovLeonid/Purchase/PurchasePage";

import ProkhorovMihailPage from "../StudentPage/ProkhorovMihail/ProkhorovMihailPage";
import { default as PrCategoryPage } from "../StudentPage/ProkhorovMihail/Category/Category";
import { default as PrClientPage } from "../StudentPage/ProkhorovMihail/Client/Client";
import { default as PrManufacturerPage } from "../StudentPage/ProkhorovMihail/Manufacturer/Manufacturer";
import { default as PrOrderPage } from "../StudentPage/ProkhorovMihail/Order/Order";
import { default as PrProductPage } from "../StudentPage/ProkhorovMihail/Product/Product";
import { default as PrPurchasePage } from "../StudentPage/ProkhorovMihail/Purchase/Purchase";
import { default as PrUserPage } from "../StudentPage/ProkhorovMihail/User/User";



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
                       {/* <Route path={'Test1'} element={<MtTest1Page/>} />
                        <Route path={'Test2'} element={<MtTest2Page/>} />*/}
                        <Route path={'Category'} element={<MtCategory />} />
                        <Route path={'User'} element={<MtUser />} />
                        <Route path={'Client'} element={<MtClient />} />
                        <Route path={'Category'} element={<MtTest1Page/>} />
                        <Route path={'Client'} element={<MtTest2Page/>} />
                    </Route>

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} >
                        <Route path={'category'} element={<KrCategoryPage/>} />
                        <Route path={'client'} element={<KrClientPage/>} />
                        <Route path={'manufacturer'} element={<KrManufacturerPage/>} />
                        <Route path={'product'} element={<KrProductPage/>} />
                        <Route path={'order'} element={<KrOrderPage/>} />

                    </Route>

                    <Route path={'okhotnikov'} element={<OkhotnikovLeonidPage/>} >
                        <Route path={'Category'} element={<OhTest1Page/>}/>
                        <Route path={'Client'} element={<OhTest2Page/>}/>
                        <Route path={'Manufacturer'} element={<OhTest3Page/>}/>
                        <Route path={'Product'} element={<OhTest4Page/>}/>
                        <Route path={'Purchase'} element={<OhTest5Page/>}/>
                    </Route>

                    <Route path={'Prokhorov'} element={<ProkhorovMihailPage/>}>
                        <Route path={'category'} element={<PrCategoryPage/>}/>
                        <Route path={'client'} element={<PrClientPage />} />
                        <Route path={'manufacturer'} element={<PrManufacturerPage />} />
                        <Route path={'product'} element={<PrProductPage />} />
                        <Route path={'purchase'} element={<PrPurchasePage />} />
                        <Route path={'user'} element={<PrUserPage />} />
                    </Route>

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;