import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import KryuchkovPopup, {IPopup} from "../../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup";
import {Category} from "../models";
import {kryuchkovAxios} from "../../KryuchkovNickPage";

type Props = IPopup & {
    onEdit: (category: Category) => void;
    category: Category,
}

const EditCategoryPopup = ({onClose, open, onEdit, category}: Props) => {

    const [editCategory, setEditCategory] = useState(category)

    const onEditClick = () => {
        kryuchkovAxios.patch<{ item: Category }>(
            'https://canstudy.ru/orderapi/category',
            {
                item: editCategory
            })
            .then((res) => {
                onEdit(res.data.item)
                onClose();
            })

    }

    return (
        <KryuchkovPopup
            open={open}
            onClose={() => onClose()}
            title={'Редактирование категории'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'Название категории'}
                    value={editCategory.name}
                    onChange={e =>
                        setEditCategory(prev => ({...prev, name: e.target.value}))
                    }
                />

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>
                </div>

            </div>
        </KryuchkovPopup>
    );
};

export default EditCategoryPopup;