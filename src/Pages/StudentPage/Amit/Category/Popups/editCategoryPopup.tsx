import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import MitrofanovaPopUp, {IPopup} from "../../../../../Components/Mitrofanova/MitrofanovaPopUp/MitrofanovaPopUp";
import { Category } from '../models';


type Props=IPopup &{
    onEdit:(category: Category)=>void;
    category: Category;
}
const EditCategoryPopUp = ({open, onClose, onEdit, category}:Props) => {

    const [editCategory, seteditCategory]=useState(category)

    const onEditClick=()=>{
        onEdit(editCategory)
    }

    return (
        <MitrofanovaPopUp
            open={open}
            onClose={()=>onClose()}
            title={'Add category'}
        >
            <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField variant="standard"
                           fullWidth={true}
                           label={'category name'}
                           value={editCategory.name}
                           onChange={e=>seteditCategory(prev=>({...prev, name:e.target.value}))}
                />
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        onClick={()=>onEditClick()}
                        color={'primary'}
                        variant={'contained'}
                    >
                        create
                    </Button>
                </div>

            </div>
        </MitrofanovaPopUp>
    );
};

export default EditCategoryPopUp;