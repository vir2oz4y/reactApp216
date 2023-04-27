import React, {useState} from 'react';
import TyrylginPopUp, {IPopup} from "../../../../../Components/Tyrylgin/TyrylginPopUp/TyrylginPopUp";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Manufacturer} from "../models";
import {TyrylginAxios} from "../../TyrylginTAPage";

type Props = IPopup & {
    onCreate:(Manufacturer:Manufacturer)=>void;
}
const CreateManufacturerPopup = ({onClose,open, onCreate}:Props) => {

    const [ManufacturerName,setManufacturerName] = useState('')

    const onCreateClick=()=>{

        TyrylginAxios
            .post<{ item: Manufacturer }>(
                'https://canstudy.ru/orderapi/Manufacturer',
                {
                    name: ManufacturerName
                })
            .then(res=>{
                onCreate(res.data.item)
                onClose();
            })
    }
    return (
        <TyrylginPopUp
            open={open}
            onClose={()=>onClose()}
            title = {'Создание категории'}
        >
            <div style={{display:'flex', flexDirection:'column',gap:'qem'}}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'Название категории'}
                    value={ManufacturerName}
                    onChange={e=>setManufacturerName(e.target.value)}
                />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </TyrylginPopUp>
    );
};

export default CreateManufacturerPopup;