import { Button, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
//import ClientElement from './ClientElement/ClientElement';
import { Client } from './models';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TyrylginPopUp from '../../../../Components/Tyrylgin/TyrylginPopUp/TyrylginPopUp';
//import CreateClientPopup from "./Popups/CreateClientPopup";
//import EditClientPopup from "./Popups/EditClientPopup";
import { TyrylginAxios } from "../TyrylginTAPage";
import CreateClientPopup from './Popups/CreateClientPopup';
import EditClientPopup from './Popups/EditClientPopup';
const ClientPage = () => {

    const [ClientList, setClientList] = useState<Client[]>([])

    const getCategories = () => {
        TyrylginAxios.get<{ items: Client[] }>(
            'https://canstudy.ru/orderapi/Client/list'
        )
            .then(res => {
                setClientList(res.data.items);
            })
    }

    useEffect(() => {
        getCategories()
    }, [])

    const onDeleteClick = (id: number) => {

        TyrylginAxios
            .delete(`https://canstudy.ru/orderapi/Client/${id}`)
            .then(() => {
                setClientList(prev => [
                    ...prev.filter(el => el.id !== id)
                ])
            })
    }

    const onEditClick = (id: number) => {
        const curClient = ClientList.find(el => el.id === id)!;
        setEditClient(curClient)
    }


    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            //flex:1
        },
        {
            field: 'firstName',
            headerName: 'firstName',
            //flex:1
        },
        {
            field: 'lastName',
            headerName: 'lastName',
            //flex:1
        },
        {
            field: 'sex',
            headerName: 'sex',
            //flex:1
        },
        {
            field: 'email',
            headerName: 'email',
            //flex:1
        },
        {
            field: 'phoneNumber',
            headerName: 'phoneNumber',
            //flex:1
        },
        {
            field: '',
            headerName: '',
            renderCell: (e: any) => {
                return <div>
                    <IconButton
                        aria-label="edit"
                        onClick={() => onEditClick(e.row.id)}
                    >
                        <EditIcon />
                    </IconButton>

                    <IconButton
                        onClick={() => onDeleteClick(e.row.id)}
                        aria-label="delete"
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
        }
    ]

    const [createPopupOpened, setCreatePopupOpened] = useState(false);
    const [editClient, setEditClient] = useState<Client | null>(null)
    const onCreate = (Client: Client) => {
        setClientList(prev => [...prev, Client])
    }

    const onEdit = (Client: Client) => {
        setClientList(prev => {
            const curClient = prev.find(el => el.id === Client.id)!;
            curClient.firstName = Client.firstName;
            curClient.lastName = Client.lastName;
            curClient.sex = Client.sex;
            curClient.email = Client.email;
            curClient.phoneNumber = Client.phoneNumber;

            return [...prev]
        })
    }

    return (
        <div style={{ width: '100%' }}>

            {createPopupOpened && <CreateClientPopup
                onCreate={(Client) => onCreate(Client)}
                open={createPopupOpened}
                onClose={() => setCreatePopupOpened(false)}
            />}
            {editClient !== null && <EditClientPopup
                open={editClient !== null}
                onClose={() => setEditClient(null)}
                Client={editClient}
                onEdit={(Client) => onEdit(Client)}
            />}



            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
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