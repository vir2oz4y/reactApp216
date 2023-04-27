import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import MitrofanovaPopUp, {IPopup} from "../../../../../Components/Mitrofanova/MitrofanovaPopUp/MitrofanovaPopUp";
import { Manufacturer } from '../models';
import {mitrofanovaAxios} from "../../AmitPage";


type Props=IPopup &{
    onCreate:(Manufacturer: Manufacturer)=>void;
}
const CreateManufacturerPopUp = ({open, onClose, onCreate}:Props) => {
    const [ManufacturerName, setManufacturerName]=useState('')

    const onCreateClick=()=>{

        mitrofanovaAxios.post<{item: Manufacturer}>("https://canstudy.ru/orderapi/Manufacturer", {
            name: ManufacturerName
        })
            .then(res=>{onCreate(res.data.item)})
        onClose();
        /*onCreate({
            id: Math.random(),
            name: ManufacturerName
        })*/
    }

    return (
        <MitrofanovaPopUp
            open={open}
            onClose={()=>onClose()}
            title={'Add Manufacturer'}
        >
            <div style={{display:'flex', flexDirection:'column', gap:'1em'}}>
                <TextField variant="standard"
                           fullWidth={true}
                           label={'Manufacturer name'}
                           value={ManufacturerName}
                           onChange={e=>setManufacturerName(e.target.value)}
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

export default CreateManufacturerPopUp;