import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";

import ProkhorovMihailPage from "../StudentPage/ProkhorovMihail/ProkhorovMihailPage";
import {default as PrTest1Page} from "../StudentPage/ProkhorovMihail/Test1/Test1Page";
import {default as PrTest2Page} from "../StudentPage/ProkhorovMihail/Test2/Test2Page";

import Test1Page from "../StudentPage/KryuchkovNick/Test1/Test1Page";
import Test2Page from "../StudentPage/KryuchkovNick/Test2/Test2Page";


const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'Prokhorov'} element={<ProkhorovMihailPage/>}>
                        <Route path={'test1'} element={<PrTest1Page/>}/>
                        <Route path={'test2'} element={<PrTest2Page/>}/>
                        </Route>

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} >
                        <Route path={'test1'} element={<Test1Page/>} />
                        <Route path={'test2'} element={<Test2Page/>} />
                    </Route>

                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;