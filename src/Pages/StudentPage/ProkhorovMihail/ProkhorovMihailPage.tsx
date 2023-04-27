import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./prokhorov.scss"
import axios from "axios";

export const prokhorovAxios = axios.create();
const ProkhorovMihailPage = () => {

    const doLogin = () => {
        prokhorovAxios.post<{ authToken: string }>('https://canstudy.ru/orderapi/User/login', {
            identifier: "14A6EB15-69E7-4306-BB3B-8CB7915557C8"
        })
            .then((res)=>{
                // console.log(res.data.authToken);
                prokhorovAxios
                    .defaults
                    .headers
                    .common['Authorization']='Bearer '+res.data.authToken;
            })
    }

    useEffect(()=>{
        doLogin();
    },[])

    return (
        <div>
            <Header studentFio={'Прохоров Михаил'}/>

            <ContentBlock>
                <div className={'self_content_block'}>
                    <AsideMenu/>

                    <Outlet/>
                </div>

            </ContentBlock>
        </div>
    );
};

export default ProkhorovMihailPage;