import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import KryuchkovPopup, {IPopup} from "../../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup";
import {Category} from "../models";
import {kryuchkovAxios} from "../../KryuchkovNickPage";

type Props = IPopup & {
    onCreate: (category: Category) => void;
}

const CreateCategoryPopup = ({onClose, open, onCreate}: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {
        kryuchkovAxios
            .post<{ item: Category }>(
                'https://canstudy.ru/orderapi/category',
                {
                    name: categoryName
                })
            .then(res => {
                onCreate(res.data.item)
                onClose();
            })
    }

    return (
        <KryuchkovPopup
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
        </KryuchkovPopup>
    );
};

export default CreateCategoryPopup;