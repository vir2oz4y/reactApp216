import React, { useState } from 'react';
import ProkhorovPopup, { IPopup } from '../../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Category } from "../models";
import {prokhorovAxios} from "../../ProkhorovMihailPage";


type Props = IPopup & {
    onEdit: (category: Category) => void;
    category: Category;
}
const EditCategoryPopup = ({ onClose, open, onEdit, category }: Props) => {

    const [editCategory, setEditCategory] = useState(category)



    const onEditClick = () => {

        prokhorovAxios.patch<{
            item: Category
        }>('https://canstudy.ru/orderapi/category',{
            item: editCategory
        })

            .then(res=>{
                onEdit(res.data.item);
                onClose();
            })


    }
    return (
        <ProkhorovPopup
            open={open}
            onClose={() => onClose()}
            title={'�������������� ���������'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'qem' }}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'�������� ���������'}
                    value={editCategory.name}
                    onChange={e => setEditCategory(prev => ({ ...prev, name: e.target.value }))
                    }
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        ��������
                    </Button>
                </div>
            </div>
        </ProkhorovPopup>
    );
};

export default EditCategoryPopup;