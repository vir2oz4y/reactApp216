import React from 'react';
import Header from "../../../Components/Header/Header";
import ContentBlock from "../../../Components/ContentBlock/ContentBlock";
import AsideMenu from "./AsideMenu/AsideMenu";
import {Outlet} from "react-router-dom";
import "./prokhorov.scss"

const ProkhorovMihailPage = () => {
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