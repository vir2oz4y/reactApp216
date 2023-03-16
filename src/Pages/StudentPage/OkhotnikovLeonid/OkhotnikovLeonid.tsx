import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./Okhotnikov.css"

const OkhotnikovLeonidPage = () => {
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