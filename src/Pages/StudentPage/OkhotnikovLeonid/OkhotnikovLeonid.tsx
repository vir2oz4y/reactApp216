import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./Okhotnikov.css"
import axios from "axios";

export const okhotnikovAxios = axios.create();
const OkhotnikovLeonidPage = () => {
    const doLogin = () => {
        okhotnikovAxios.post<{authToken: string}>('https://canstudy.ru/orderapi/User/login', {
            identifier: "41020E77-7F1D-4D85-A658-B7283F4BE177"
        })
            .then((res)=>{
                okhotnikovAxios
                    .defaults
                    .headers
                    .common['Authorization']='Bearer ' + res.data.authToken;
            })
    }
    useEffect(()=>{
        doLogin();
    },[])
    return (
        <div>
            <Header studentFio={'Охотников Леонид'}/>

            <ContentBlock>
                <div className={'self_content_block'}>
                    <AsideMenu/>

                    <Outlet/>
                </div>
            </ContentBlock>
        </div>
    );
};

export default OkhotnikovLeonidPage;