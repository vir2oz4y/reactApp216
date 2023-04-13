import React, {useState} from 'react';
import TyrylginPopUp, {IPopup} from "../../../../../Components/Tyrylgin/TyrylginPopUp/TyrylginPopUp";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Category} from "../models";

type Props = IPopup & {
    onEdit:(category:Category)=>void;
    category:Category;
}
const EditCategoryPopup = ({onClose,open, onEdit, category}:Props) => {

    const [editCategory,setEditCategory] = useState(category)

    const onEditClick=()=>{
        onEdit(editCategory);
        onClose();
    }
    return (
        <TyrylginPopUp
            open={open}
            onClose={()=>onClose()}
            title = {'Редактирование категории'}
        >
            <div style={{display:'flex', flexDirection:'column',gap:'qem'}}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'Название категории'}
                    value={editCategory.name}
                    onChange={e=>setEditCategory(prev=>({...prev, name:e.target.value}))
                }
                />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onEditClick()}
                    >
                        Изменить
                    </Button>
                </div>
            </div>
        </TyrylginPopUp>
    );
};

export default EditCategoryPopup;