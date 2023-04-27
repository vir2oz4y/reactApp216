import React, {useState} from 'react';
import OkhotnikovPopUp, {IPopup} from "../../../../../Components/Okhotnikov/OkhotnikovPopUp/OkhotnikovPopUp";
import {Button, TextField} from "@mui/material";
import {Category} from "../models";
import {okhotnikovAxios} from "../../OkhotnikovLeonid";

type Props = IPopup & {
    onCreate: (category: Category) => void;

}
const Createcategorypopup = ({open, onClose, onCreate}: Props) => {
    const [categoryName, setCategoryName] = useState('')
    const onCreateClick = () => {
        okhotnikovAxios.post<{
            item:Category }>
        ('https://canstudy.ru/orderapi/category',{
            name: categoryName
        })
            .then(res=>{
                onCreate(res.data.item)
                onClose();
            })

    }
    return (
        <OkhotnikovPopUp
            open={open}
            onClose={() => onClose()}
            title={'Создание категории'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'Название категории'}
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}

                    >
                        Создать
                    </Button>
                </div>
            </div>
        </OkhotnikovPopUp>
    );
};
export default Createcategorypopup;