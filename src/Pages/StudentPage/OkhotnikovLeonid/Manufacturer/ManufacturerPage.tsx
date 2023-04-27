import React, {useEffect, useState} from 'react';
import {Manufacturer} from "./models";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import {okhotnikovAxios} from "../OkhotnikovLeonid";

const ManufacturerPage = () => {
    const [ManufacturerList, setManufacturerList] = useState<Manufacturer[]>([])
    const onDeleteClick = (id:number) =>{
        okhotnikovAxios.delete(`https://canstudy.ru/orderapi/Manufacturer/${id}`)
            .then(()=>{
                setManufacturerList(prev=>[
                    ...prev.filter(el=>el.id!==id)
                ])
            })
        setManufacturerList(prev => [...prev.filter(el => el.id !== id)])

    }
    const getCategories = () =>{
        okhotnikovAxios.get<{ items: Manufacturer[]
        }>('https://canstudy.ru/orderapi/Manufacturer/list')
            .then(res=>{setManufacturerList(res.data.items);
            })
    }
    useEffect(()=>{
        getCategories()
    },[])

    const onEditClick = (id:number) =>{
        const curManufacturer = ManufacturerList.find(el=>el.id===id)
        setEditManufacturer(curManufacturer)
    }
    const columns: GridColDef[]=[
        {
            field:'id',
            headerName: 'ID'
        },
        {
            field: 'name',
            headerName: 'Name'
        },
        {
            field: 'country',
            headerName: 'Country'
        },
        {
            field: 'city',
            headerName: 'City'
        },
        {
            field: ' ',
            headerName: '',
            renderCell: (e: any) =>{
                return <div>
                    <IconButton aria-label="edit"
                                onClick={()=>onEditClick(e.row.id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        onClick ={() => onDeleteClick(e.row.id)}
                        aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
        }
    ];
    const [createPopupOpened, setCreatePopupOpened] = useState(false);
    const [editManufacturer, setEditManufacturer]=useState<Manufacturer|null>(null)
    const onCreate = (Manufacturer:Manufacturer) =>{
        setManufacturerList(prev=>[...prev,Manufacturer])
    }
    const onEdit = (Manufacturer:Manufacturer)=>{
        setManufacturerList(prev=>{
            const curManufacturer = prev.find(el=>el.id===Manufacturer.id)!;
            curManufacturer.name = Manufacturer.name;
            return[...prev]
        })
    }
    return (

        <div style={{width:'100%'}}>
            {/*{createPopupOpened && <CreateManufacturerpopup
                onCreate={(Manufacturer)=>onCreate(Manufacturer)}
                open={createPopupOpened}
                onClose={()=>setCreatePopupOpened(false)}
            />}
            {editManufacturer!==null&&<EditManufacturerPopup
                open={editManufacturer!==null}
                onClose={()=>setEditManufacturer(null)}
                Manufacturer={editManufacturer}
                onEdit={(Manufacturer)=>onEdit(Manufacturer)}
            />}*/}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <h1>Производитель</h1>
                <div>
                    <Button color={'primary'}
                            variant={'contained'}
                            onClick={()=> setCreatePopupOpened(true)}
                    >
                        Добавить производителя
                    </Button>
                </div>
            </div>

            <div style={{width:"100%", height:"80vh"}}>
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