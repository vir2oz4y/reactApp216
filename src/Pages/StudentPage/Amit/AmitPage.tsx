import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./SiteMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./PageStyle.scss";
import axios from "axios";

export const mitrofanovaAxios=axios.create();
const doLogin=()=>{
    mitrofanovaAxios.post<{authToken: string }>("https://canstudy.ru/orderapi/user/login", {
        identifier: "B1A5A244-4C1C-474E-B0DF-20E83EF0716F" })
        .then((res)=>{
            mitrofanovaAxios
                .defaults
                .headers
                .common['Authorization']='Bearer '+res.data.authToken;
        /*console.log(res.data.authToken);*/
    })
}

const KryuchkovNickPage = () => {

    useEffect(()=>{
        doLogin();
    }, [])

    return (
        <div>
            <Header studentFio={'Alexandra Mitrofanova'}/>

            <ContentBlock>
                <div className={'self_content_block'}>
                    <AsideMenu/>
                    <Outlet/>
                </div>
            </ContentBlock>
        </div>
    );
};

export default KryuchkovNickPage;