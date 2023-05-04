import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import MitrofanovaPopUp, { IPopup } from "../../../../../Components/Mitrofanova/MitrofanovaPopUp/MitrofanovaPopUp";
import { Client } from '../models';
import { mitrofanovaAxios } from "../../AmitPage";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


type Props = IPopup & {
    onEdit: (Client: Client) => void;
    Client: Client;
}
const EditClientPopUp = ({ open, onClose, onEdit, Client }: Props) => {

    const [client, setClient] = useState(Client)

    const onEditClick = () => {
        mitrofanovaAxios.patch("https://canstudy.ru/orderapi/Client", {
            item: {
                ...client,
                sex: parseInt(client.sex as any, 10)
            }
        })
            .then(res => { onEdit(res.data.item) })
        onClose();
        /* onEdit(editClient)*/
    }

    return (
        <MitrofanovaPopUp
            open={open}
            onClose={() => onClose()}
            title={'Add Client'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <TextField variant="standard"
                    fullWidth={true}
                    label={'first Name'}
                    value={client.firstName}
                    onChange={e => setClient(prev => ({ ...prev, firstName: e.target.value }))}
                />

                <TextField variant="standard"
                    fullWidth={true}
                    label={'last Name'}
                    value={client.firstName}
                    onChange={e => setClient(prev =>
                        ({ ...prev, lastName: e.target.value }))}
                />

                <FormControl fullWidth>
                    <InputLabel id="sex">Sex</InputLabel>
                    <Select
                        labelId="sex"
                        value={client.sex?.toString()}
                        label="Sex"
                        onChange={(e) => setClient(prev => ({
                            ...prev, sex: e.target.value as any
                        }))}
                    >
                        <MenuItem value={0}>Female</MenuItem>
                        <MenuItem value={1}>Male</MenuItem>
                    </Select>
                </FormControl>

                <TextField variant="standard"
                    fullWidth={true}
                    label={'email'}
                    value={client.email}
                    onChange={e => setClient(prev =>
                        ({ ...prev, email: e.target.value }))}
                />

                <TextField variant="standard"
                    fullWidth={true}
                    label={'phoneNumber'}
                    value={client.phoneNumber}
                    onChange={e => setClient(prev =>
                        ({ ...prev, phoneNumber: e.target.value }))}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        onClick={() => onEditClick()}
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

export default EditClientPopUp;