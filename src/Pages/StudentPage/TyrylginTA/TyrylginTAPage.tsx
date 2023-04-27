import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./TyrylginTAPage.scss"
import axios from 'axios';


export const TyrylginAxios = axios.create();


const TyrylginTAPage = () => {

    const doLogin = () => {
        TyrylginAxios.post<{ authToken: string }>('https://canstudy.ru/orderapi/user/login',{

            identifier: "C4AC54D2-A9D6-4231-8880-08D9EEBE580C"

        })
            .then((res)=>{

                TyrylginAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + res.data.authToken;
            })
    }

    useEffect(()=>{
        doLogin();
    },[])

    return (
        <div>
            <Header studentFio={'Тырылгин Тимур'}/>

            <ContentBlock>
                <div className={'self_content_block'}>
                    <AsideMenu/>

                    <Outlet/>
                </div>
            </ContentBlock>
        </div>
    );
};

export default TyrylginTAPage;