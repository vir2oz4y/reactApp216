import React, {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import axios from "axios";

export const RerihAxios = axios.create();

const key = "c0fccd07-58ad-434a-b594-2d8396c26c61";
const RerihPage = () => {

    useEffect(()=>{
        RerihAxios.post<{authToken: string}>(
            'https://canstudy.ru/orderapi/user/login',
            {
                identifier: key
            }
        )
            .then((response)=>{
                RerihAxios
                    .defaults
                    .headers
                    .common['Authorization'] = 'Bearer ' + response.data.authToken
            });
    },[])
    return (
        <div>
            <Header studentFio={'Свириденко Дмитрий'}/>

            <ContentBlock>
                <div style={{ display: 'flex', gap: 'lem' }}>
                    <div style={{ width: '200px' }}>
                        <AsideMenu />
                    </div>

                    <div style={{ padding: 'lem' }}>
                        <Outlet />
                    </div>
                </div >

            </ContentBlock>
        </div>
    );
};

export default RerihPage;