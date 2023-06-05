import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import {useEffect, useState} from 'react';
import { Client } from './models';
import { CreateClientPopUp } from './Popus/CreateClientPopup';
import { EditClientPopup } from './Popus/EditClientPopup';
import {RerihAxios} from "../RerihPage";

const ClientPage = () => {

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: .3
        },
        {
            field: 'sex',
            headerName: 'Sex',
            flex: 1,
            editable: true,
        },
        {
            field: 'firstName',
            headerName: 'First name',
            flex: 1,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            flex: 1,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
            editable: true,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone number',
            flex: 1,
            editable: true,
        },
        {
            field: '',
            headerName: '',
            width: 200,
            renderCell: (e: any) => {
                return <div style={{display: 'flex', gap: '1em'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick = {()=>setShowEditClient(e.row)}
                    >
                        Edit
                    </Button>

                    <Button color={'primary'}
                            variant={'contained'}
                            onClick={()=>OneDeleteClick(e.row.id)}
                    >
                        Delete
                    </Button>
                </div>
            },
        }

    ];

    const OneDeleteClick = (id:number) => {

        RerihAxios.delete(`https://canstudy.ru/orderapi/client/${id}`)
            .then(() => {
                setClients(prev => prev.filter(el => el.id !== id)
                )
            })
    }
    const [clients, setClients] = useState<Client[]>([

    ])

    useEffect(() => {
        RerihAxios.get<{ items: Client[] }>(
            'https://canstudy.ru/orderapi/client/list'
        )
            .then((response) => {
                setClients(response.data.items);
            })
    }, [])

    const [ShowCreateClient, setShowCreateClient] = useState(false);
    const [editedClient, setShowEditClient] = useState <Client|null>(null);

    const onCreate = (newClient: Client) => {
        setClients(prev => [...prev, newClient]);
    }
    const onEdit = (client: Client) => {
        setClients(prev => {
            const editClient = prev.find(el => el.id === client.id)

            if(editClient) {
                editClient.sex = client.sex;
                editClient.firstName = client.firstName;
                editClient.lastName = client.lastName;
                editClient.email = client.email;
                editClient.phoneNumber = client.phoneNumber;
            }
            return [...prev];
        });
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>
                    Клиенты
                </h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setShowCreateClient(true)}
                    >
                        Добавить клиента
                    </Button>
                </div>
            </div>

            {ShowCreateClient && <CreateClientPopUp
                open={ShowCreateClient}
                onClose={() => setShowCreateClient(false)}
                onCreate={(Client) => onCreate(Client)}

            />}

            {editedClient !== null && <EditClientPopup
                open={true}
                onClose={()=> setShowEditClient(null)}
                client={editedClient}
                onEdit={(Client)=>onEdit(Client)}
            />}

            <Box sx={{height: '70vh', width: '100%'}}>
                <DataGrid
                    rows={clients}
                    columns={columns}
                />
            </Box>
        </div>
    );
};

export default ClientPage;