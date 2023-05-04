import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useState } from 'react';
//import ClientElement from './ClientElement';
import { Client } from './models';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MitrofanovaPopUp from '../../../../Components/Mitrofanova/MitrofanovaPopUp/MitrofanovaPopUp';
//import CreateClientPopUp from "./Popups/CreateClientPopUp";
//import EditClientPopUp from "./Popups/editClientPopup";
import { mitrofanovaAxios } from "../AmitPage";
import { cli } from 'webpack';
import CreateClientPopUp from './Popups/CreateClientPopup';
import EditClientPopup from './Popups/EditClientPopup';

const ClientPage = () => {
    const [ClientList, setClientList] = useState<Client[]>([
        /*{
            id: 0,
            name: 'Client 1'
        },
        {
            id: 1,
            name: 'Client 2'
        }*/
    ]);

    const getCategories = () => {
        mitrofanovaAxios.get<{
            items: Client[]
        }>("https://canstudy.ru/orderapi/Client/list")
            .then(res => setClientList(res.data.items))
    }
    useEffect(() => {
        getCategories();
    }, [])
    const onDeleteClick = (id: number) => {

        mitrofanovaAxios.delete(`https://canstudy.ru/orderapi/Client/${id}`)
            .then(() => {
                setClientList(prev => [...prev.filter(el => el.id !== id)])
            })
    }
    const onEditClick = (id: number) => {
        const curClient = ClientList.find(el => el.id === id);
        setEditClient(curClient);
    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID'
        },
        {
            field: 'firstName',
            headerName: 'firstName'
        },
        {
            field: 'lastName',
            headerName: 'lastName'
        },
        {
            field: 'sex',
            headerName: 'sex'
        },
        {
            field: 'email',
            headerName: 'email'
        },
        {
            field: 'phoneNumber',
            headerName: 'phoneNumber'
        },
        
        {
            field: '',
            headerName: '',
            renderCell: (e: any) => {
                return <div>
                    <IconButton
                        onClick={() => onEditClick(e.row.id)}
                        aria-label="edit">
                        <EditIcon />
                    </IconButton>

                    <IconButton
                        onClick={() => onDeleteClick(e.row.id)}
                        aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
        }
    ]

    const [createPopupOpened, setCreatePopupOpened] = useState(false);
    const [editClient, setEditClient] = useState<Client | null>(null);

    const onCreate = (Client: Client) => {
        setClientList(prev => [...prev, Client])
    }

    const onEdit = (Client: Client) => {
        setClientList(prev => {
            const curClient = prev.find(el => el.id === Client.id);

            curClient.firstName = Client.firstName;
            curClient.lastName = Client.lastName;
            curClient.sex = Client.sex;
            curClient.email = Client.email;
            curClient.phoneNumber = Client.phoneNumber;
            //curClient.name = Client.name;

            return [...prev]
        })

    }

    return (
        <div style={{ width: '100%' }}>
            {createPopupOpened && <CreateClientPopUp
                onCreate={(Client: Client) => onCreate(Client)}
                open={createPopupOpened}
                onClose={() => setCreatePopupOpened(false)}
            ></CreateClientPopUp>}

            {editClient != null && <EditClientPopup
                open={editClient != null}
                onClose={() => setEditClient(null)}
                Client={editClient}
                onEdit={(Client: Client) => onEdit(Client)}
            />}

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1>Client</h1>
                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setCreatePopupOpened(true)}
                    >
                        Add Client
                    </Button>
                </div>
            </div>
            <div style={{ width: '100%', height: '80vh' }}>
                <DataGrid
                    rows={ClientList}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    //checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    );
};

export default ClientPage;