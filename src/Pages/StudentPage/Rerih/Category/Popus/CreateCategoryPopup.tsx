import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import RerihPopup, {IPopup} from "../../../../../Components/Rerih/RerihPopup/RerihPopup";
import {Category} from "../Models";
import {RerihAxios} from "../../RerihPage";

type Props = IPopup & {
    onCreate: (category: Category) => void;
}

const RerihCategoryPopup = ({onClose, open, onCreate}: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {
        RerihAxios
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
        <RerihPopup
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
        </RerihPopup>
    );
};

export default RerihCategoryPopup;