import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import ProkhorovPopup, { IPopup } from "../../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup";
import { Client } from '../models';
import { prokhorovAxios } from "../../ProkhorovMihailPage";

type Props = IPopup & {
    onCreate: (Client: Client) => void;
}
const CreateClientPopup = ({ onClose, open, onCreate }: Props) => {

    const [client, setClient] = useState<Client>({
        id: 0,
        sex: 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''

    })

    const onCreateClick = () => {
        prokhorovAxios.post<{
            item: Client
        }>('https://canstudy.ru/orderapi/Client', {
            ...client,
            sex: parseInt(client.sex as any, 10)
        }
        )
            .then(res => {
                onCreate(res.data.item)
                onClose();
            })
    }
    return (
        <ProkhorovPopup
            open={open}
            onClose={() => onClose()}
            title={'Создание категории'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'qem' }}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'FirstName'}
                    value={client.firstName}
                    onChange={e => setClient(prev => ({ ...prev, firstName: e.target.value }))}
                />
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'LastName'}
                    value={client.lastName}
                    onChange={e => setClient(prev => ({ ...prev, lastName: e.target.value }))}
                />
                <FormControl fullWidth>
                    <InputLabel id="sx">Sex</InputLabel>
                    <Select
                        labelId="sex"
                     
                        value={client.sex?.toString()}
                        label="Sex"
                        onChange={(e) => setClient(prev => ({
                            ...prev,
                            sex: e.target.value as any
                        }))}
                    >

                        <MenuItem value={"0"}>Female</MenuItem>
                        <MenuItem value={"1"}>Male</MenuItem>
                       
                    </Select>
                </FormControl>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'email'}
                    value={client.email}
                    onChange={e => setClient(prev => ({ ...prev, email: e.target.value }))}
                />
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'phoneNumber'}
                    value={client.phoneNumber}
                    onChange={e => setClient(prev => ({ ...prev, phoneNumber: e.target.value }))}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </ProkhorovPopup>
    );
};

export default CreateClientPopup;



function sex<T>(arg0: string, arg1: any, sex: any, arg3: number) {
    throw new Error('Function not implemented.');
}
