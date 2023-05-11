import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import KryuchkovPopup, {IPopup} from "../../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup";
import {Manufacturer} from "../models";
import {kryuchkovAxios} from "../../KryuchkovNickPage";

type Props = IPopup & {
    onCreate: (Manufacturer: Manufacturer) => void;
}

const CreateManufacturerPopup = ({onClose, open, onCreate}: Props) => {

    const [ManufacturerName, setManufacturerName] = useState('')

    const onCreateClick = () => {
        kryuchkovAxios
            .post<{ item: Manufacturer }>(
                'https://canstudy.ru/orderapi/Manufacturer',
                {
                    name: ManufacturerName
                })
            .then(res => {
                onCreate(res.data.item)
                onClose();
            })
    }

    return (
        <KryuchkovPopup
            open={open}
            onClose={() => onClose()}
            title={'Создание категории'}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'Название категории'}
                    value={ManufacturerName}
                    onChange={e => setManufacturerName(e.target.value)}
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
        </KryuchkovPopup>
    );
};

export default CreateManufacturerPopup;