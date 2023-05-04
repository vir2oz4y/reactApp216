import React, { useState } from 'react';
import TyrylginPopUp, { IPopup } from "../../../../../Components/Tyrylgin/TyrylginPopUp/TyrylginPopUp";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Client } from "../models";
import { TyrylginAxios } from "../../TyrylginTAPage";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type Props = IPopup & {
    onEdit: (Client: Client) => void;
    Client: Client;
}
const EditClientPopup = ({ onClose, open, onEdit, Client }: Props) => {

    const [client, setClient] = useState(Client)

    //const onEditClick=()=>{
    //onEdit(editClient);
    //onClose();
    //}

    const onEditClick = () => {

        TyrylginAxios
            .patch<{ item: Client }>(
                'https://canstudy.ru/orderapi/Client',
                {
                    item: {
                        ...client,
                        sex:parseInt(client.sex as any, 10)
                    }
                })
            .then(res => {
                onEdit(res.data.item)
                onClose();
            })
    }
    return (
        <TyrylginPopUp
            open={open}
            onClose={() => onClose()}
            title={'Edit Client'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'qem' }}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'FirstName'}
                    value={client.firstName}
                    onChange={e => setClient(prev => ({
                        ...prev,
                        firstName: e.target.value
                    }))}
                />
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'LastName'}
                    value={client.lastName}
                    onChange={e => setClient(prev => ({
                        ...prev,
                        lastName: e.target.value
                    }))}
                />

                <FormControl fullWidth>
                    <InputLabel id="sex">Sex</InputLabel>
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
                    onChange={e => setClient(prev => ({
                        ...prev,
                        email: e.target.value
                    }))}
                />

                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'phoneNumber'}
                    value={client.phoneNumber}
                    onChange={e => setClient(prev => ({
                        ...prev,
                        phoneNumber: e.target.value
                    }))}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        ��������
                    </Button>
                </div>
            </div>
        </TyrylginPopUp>
    );
};

export default EditClientPopup;