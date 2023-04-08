import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./SiteMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./PageStyle.scss";

const KryuchkovNickPage = () => {
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