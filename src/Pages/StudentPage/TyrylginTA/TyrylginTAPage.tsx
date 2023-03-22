import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./TyrylginTAPage.scss"
const TyrylginTAPage = () => {
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