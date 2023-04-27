import React, {useState} from 'react';
import OkhotnikovPopUp, {IPopup} from "../../../../../Components/Okhotnikov/OkhotnikovPopUp/OkhotnikovPopUp";
import {Button, TextField} from "@mui/material";
import {okhotnikovAxios} from "../../OkhotnikovLeonid";
import {Manufacturer} from "../models";

type Props = IPopup & {
    onCreate: (Manufacturer: Manufacturer) => void;

}
const CreateManufacturepopup = ({open, onClose, onCreate}: Props) => {
    const [ManufactureName, setManufactureName] = useState('')
    const onCreateClick = () => {
        okhotnikovAxios.post<{
            item:Manufacturer }>
        ('https://canstudy.ru/orderapi/Manufacture',{
            name: ManufactureName
        })
            .then(res=>{
                onCreate(res.data.item)
                onClose();
            })

    }
    return (
        <OkhotnikovPopUp
            open={open}
            onClose={() => onClose()}
            title={'Создание категории'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'Название категории'}
                    value={ManufactureName}
                    onChange={e => setManufactureName(e.target.value)}
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
        </OkhotnikovPopUp>
    );
};
export default CreateManufacturepopup;