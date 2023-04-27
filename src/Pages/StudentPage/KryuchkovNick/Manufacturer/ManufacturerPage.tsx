import {Button, IconButton} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import React, {useEffect, useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {kryuchkovAxios} from "../KryuchkovNickPage";
import {Manufacturer} from "./models";

const ManufacturerPage = () => {

    const [ManufacturerList, setManufacturerList] = useState<Manufacturer[]>([])

    const getManufacturies = () => {
        kryuchkovAxios.get<{ items: Manufacturer[] }>(
            'https://canstudy.ru/orderapi/Manufacturer/list'
        )
            .then(res => {
                setManufacturerList(res.data.items);
            })
    }

    useEffect(() => {
        getManufacturies()
    }, [])


    const onDeleteClick = (id: number) => {
        kryuchkovAxios.delete(
            `https://canstudy.ru/orderapi/Manufacturer/${id}`
        )
            .then(() => {
                setManufacturerList(prev => [
                    ...prev.filter(el => el.id !== id)
                ])
            })
    }

    const onEditClick = (id: number) => {
        const curManufacturer = ManufacturerList.find(el => el.id === id)!;
        setEditManufacturer(curManufacturer)
    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1
        },
        {
            field: 'name',
            headerName: 'Название',
            flex:1
        },
        {
            field: 'country',
            headerName: 'Страна',
            flex:1
        },
        {
            field: 'city',
            headerName: 'Город',
            flex:1
        },
        {
            field: '',
            headerName: '',
            //flex: .3,
            renderCell: (e: any) => {
                return <div>
                    <IconButton
                        onClick={() => onEditClick(e.row.id)}
                        aria-label="edit"
                    >
                        <EditIcon/>
                    </IconButton>

                    <IconButton
                        onClick={() => onDeleteClick(e.row.id)}
                        aria-label="delete"
                    >
                        <DeleteIcon/>
                    </IconButton>
                </div>
            }
        }
    ]

    const [createPopupOpened, setCreatePopupOpened] = useState(false);

    const [editManufacturer, setEditManufacturer] = useState<Manufacturer | null>(null)

    const onCreate = (Manufacturer: Manufacturer) => {
        setManufacturerList(prev => [...prev, Manufacturer])
    }

    const onEdit = (Manufacturer: Manufacturer) => {
        setManufacturerList(prev => {

            const curManufacturer = prev.find(el => el.id === Manufacturer.id)!;
            curManufacturer.name = Manufacturer.name;

            return [...prev]
        })
    }

    return (
        <div style={{width: '100%'}}>

            {/*{createPopupOpened && <CreateManufacturerPopup
                onCreate={(Manufacturer) => onCreate(Manufacturer)}
                open={createPopupOpened}
                onClose={() => setCreatePopupOpened(false)}
            />}

            {editManufacturer !== null && <EditManufacturerPopup
                open={editManufacturer !== null}
                onClose={() => setEditManufacturer(null)}
                Manufacturer={editManufacturer}
                onEdit={(Manufacturer) => onEdit(Manufacturer)}
            />}*/}

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <h1>Призводитель</h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setCreatePopupOpened(true)}
                    >
                        Добавить производителя
                    </Button>
                </div>
            </div>


            <div style={{width: '100%', height: '80vh'}}>
                <DataGrid
                    rows={ManufacturerList}
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

export default ManufacturerPage;