import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import ProkhorovPopup, {IPopup} from "../../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup";
import {Manufacturer} from '../models';
import {prokhorovAxios} from "../../ProkhorovMihailPage";

type Props = IPopup & {
    onCreate: (category: Manufacturer) => void;
}
const CreateCategoryPopup = ({ onClose, open, onCreate }: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {
        prokhorovAxios.post<{
            item: Manufacturer
        }>('https://canstudy.ru/orderapi/category',{
            name: categoryName
        })
            .then(res=>{
                onCreate(res.data.item)
                onClose();
            })
    }
    return (
        <ProkhorovPopup
            open={open}
            onClose={() => onClose()}
            title={'Создание категории'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'qem' }}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'Название категории'}
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </ProkhorovPopup>
    );
};

export default CreateCategoryPopup;


