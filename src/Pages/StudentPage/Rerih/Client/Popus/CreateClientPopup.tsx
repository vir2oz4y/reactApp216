import {Button,TextField } from '@mui/material';
import  React, { useState } from 'react'
import TelelinskiyPopUp, {IPopup} from "../../../../../Components/Rerih/RerihPopup/RerihPopup";
import { Client } from '../Models';
import {RerihAxios} from "../../RerihPage";
import {Category} from "../../Category/models";
import RerihPopup from "../../../../../Components/Rerih/RerihPopup/RerihPopup";


type Props = IPopup & {
    onCreate: (newClient: Client) => void;
}

export const CreateClientPopUp = ({ open, onClose, onCreate }: Props) => {

    const [ClientSex, setClientSex] = useState('')
    const [ClientFirstName, setClientFirstName] = useState('')
    const [ClientLastName, setClientLastName] = useState('')
    const [ClientEmail, setClientEmail] = useState('')
    const [ClientPhoneNumber, setClientPhoneNumber] = useState('')

    const onCreateClick = () => {

        RerihAxios.post<{item: Client}>('https://canstudy.ru/orderapi/client',
            {
                sex: parseInt(ClientSex, 10),
                firstName: ClientFirstName,
                lastName: ClientLastName,
                email: ClientEmail,
                phoneNumber: ClientPhoneNumber
            }
        )
            .then((response) => {
                onCreate(response.data.item)
                onClose();
            })

    }

    return (
        <RerihPopup
            open={open}
            onClose={onClose}
            title={"Create Client"}
        >

            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                <TextField
                    label="Client Sex"
                    variant="standard"
                    value={ClientSex}
                    onChange={e => setClientSex(e.target.value)}
                />

                <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                    <TextField
                        label="Client First Name"
                        variant="standard"
                        value={ClientFirstName}
                        onChange={e => setClientFirstName(e.target.value)}
                    />

                    <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                        <TextField
                            label="Client Last Name"
                            variant="standard"
                            value={ClientLastName}
                            onChange={e => setClientLastName(e.target.value)}
                        />

                        <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                            <TextField
                                label="Client Email"
                                variant="standard"
                                value={ClientEmail}
                                onChange={e => setClientEmail(e.target.value)}
                            />

                            <div style={{display: 'flex', flexDirection:'column', gap: '1em'}}>
                                <TextField
                                    label="Client Phone Number"
                                    variant="standard"
                                    value={ClientPhoneNumber}
                                    onChange={e => setClientPhoneNumber(e.target.value)}
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
                </div>
            </div>
        </RerihPopup>
    )
}