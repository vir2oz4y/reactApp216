import React, { useState } from 'react';
import ProkhorovPopup, { IPopup } from '../../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Client } from "../models";
import { prokhorovAxios } from "../../ProkhorovMihailPage";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


type Props = IPopup & {
    onEdit: (Client: Client) => void;
    Client: Client;
}
const EditClientPopup = ({ onClose, open, onEdit, Client }: Props) => {

    const [client, setClient] = useState(Client)



    const onEditClick = () => {

        prokhorovAxios.patch<{
            item: Client
        }>('https://canstudy.ru/orderapi/Client', {
            item: {
                ...client,
                sex:parseInt(client.sex as any, 10)
            }
        })

            .then(res => {
                onEdit(res.data.item);
                onClose();
            })


    }
    return (
        <ProkhorovPopup
            open={open}
            onClose={() => onClose()}
            title={'Редактирование категории'}
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
                    onChange={e => setClient(prev => ({ ...prev, e, ailName: e.target.value }))}
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
                        onClick={() => onEditClick()}
                    >
                        ��������
                    </Button>
                </div>
            </div>
        </ProkhorovPopup>
    );
};

export default EditClientPopup;