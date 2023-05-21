import {Button, TextField } from '@mui/material';
import  React, { useState } from 'react'
import RerihPopup , {IPopup} from "../../../../../Components/Rerih/RerihPopup/RerihPopup";
import { Manufacturer } from '../Models';
import {RerihAxios} from "../../RerihPage";



type Props = IPopup & {
    onCreate: (newManufacture: Manufacturer) => void;
}

export const CreateManufacturer = ({ open, onClose, onCreate }: Props) => {

    const [ManufactureName, setManufactureName] = useState('')
    const [ManufactureCity, setManufactureCity] = useState('')
    const [ManufactureCountry, setManufactureCountry] = useState('')

    const onCreateClick = () => {
        RerihAxios.post<{ item: Manufacturer }>('https://canstudy.ru/orderapi/manufacturer',
            {
                name: ManufactureName,
                city: ManufactureCity,
                country:ManufactureCountry
            })
            .then(response => {
                onCreate(response.data.item)
                onClose()
            })
    }

    return (
        <RerihPopup
            open={open}
            onClose={onClose}
            title={"Create Manufacture"}
        >
            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Manufacture name"
                    variant="standard"
                    value={ManufactureName}
                    onChange={e => setManufactureName(e.target.value)}
                />

                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="Manufacture city"
                        variant="standard"
                        value={ManufactureCity}
                        onChange={e => setManufactureCity(e.target.value)}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Manufacture country"
                            variant="standard"
                            value={ManufactureCountry}
                            onChange={e => setManufactureCountry(e.target.value)}
                        />

                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                            <Button
                                color={'primary'}
                                variant={'contained'}
                                onClick={() => onCreateClick()}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </RerihPopup>
    )
}