import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import RerihPopup , {IPopup} from "../../../../../Components/Rerih/RerihPopup/RerihPopup";
import { Category } from '../Models';
import {RerihAxios} from "../../RerihPage";



type Props = IPopup & {
    category: Category,
    onEdit: (newCategory: Category) => void;
}

const RerihEditCategory = ({open, onClose, onEdit, category:categoryProps}:Props)=> {

    const [category, setCategory] = useState(categoryProps)

    const onEditClick = () => {

        RerihAxios.patch<{item: Category}>(
            'https://canstudy.ru/orderapi/category',
            {
                item: category
            }
        ).then((response) => {
            onEdit(response.data.item);
            onClose();
        })
    }

    return (
        <RerihPopup
            open ={open}
            onClose ={onClose}
            title={"Создание категории"}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    label="Имя категории"
                    variant="outlined"
                    value={category.name}
                    onChange={e => setCategory(prev=>({...prev, name: e.target.value}))}
                />

                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        color = {'primary'}
                        variant = {'contained'}
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>

                </div>
            </div>
        </RerihPopup>
    );
};

export default RerihEditCategory;