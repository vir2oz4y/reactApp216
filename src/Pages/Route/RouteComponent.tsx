import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import MainPage from "../MainPage";
import StudentsPage from "../StudentsPage";
import KryuchkovNickPage from "../StudentPage/KryuchkovNick/KryuchkovNickPage";
import OkhotnikovLeonidPage from "../StudentPage/OkhotnikovLeonid/OkhotnikovLeonid";
import Test1Page from "../StudentPage/OkhotnikovLeonid/Test1/Test1Page";
import Test2Page from "../StudentPage/OkhotnikovLeonid/Test2/Test2Page";

const RouteComponent = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route index element={<StudentsPage/>} />

                    <Route path={'teacher'} element={<KryuchkovNickPage/>} />
                    <Route path={'okhotnikov'} element={<OkhotnikovLeonidPage/>} >
                        <Route path={'Test1'} element={<Test1Page/>}/>
                        <Route path={'Test2'} element={<Test2Page/>}/>
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default RouteComponent;