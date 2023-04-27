import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import MitrofanovaPopUp, {IPopup} from "../../../../../Components/Mitrofanova/MitrofanovaPopUp/MitrofanovaPopUp";
import { Category } from '../models';
import {mitrofanovaAxios} from "../../AmitPage";


type Props=IPopup &{
onCreate:(category: Category)=>void;
}
const CreateCategoryPopUp = ({open, onClose, onCreate}:Props) => {
    const [categoryName, setcategoryName]=useState('')

    const onCreateClick=()=>{

        mitrofanovaAxios.post<{item: Category}>("https://canstudy.ru/orderapi/category", {
            name: categoryName
        })
            .then(res=>{onCreate(res.data.item)})
        onClose();
        /*onCreate({
            id: Math.random(),
            name: categoryName
        })*/
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
                           value={categoryName}
                           onChange={e=>setcategoryName(e.target.value)}
                />
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button
                        onClick={()=>onCreateClick()}
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

export default CreateCategoryPopUp;