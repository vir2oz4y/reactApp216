import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./RerihPage.scss.scss"
import axios from "axios";

export const RerihAxios = axios.create();
const RerihPage = () => {

    const doLogin = () => {
        RerihAxios.post<{ authToken: string }>('https://canstudy.ru/orderapi/User/login', {
            identifier: "7284a9a1-a57c-435b-8724-4bcf2649cd57"
        })
            .then((res)=>{
                // console.log(res.data.authToken);
                RerihAxios
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
            <Header studentFio={'Рерих Эдуард'}/>

            <ContentBlock>
                <div className={'self_content_block'}>
                    <AsideMenu/>

                    <Outlet/>
                </div>

            </ContentBlock>
        </div>
    );
};

export default RerihPage;