import {DataGrid, GridColDef} from '@mui/x-data-grid';
import React, {useEffect} from 'react';
import {useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MitrofanovaPopUp from '../../../../Components/Mitrofanova/MitrofanovaPopUp/MitrofanovaPopUp';
import {mitrofanovaAxios} from "../AmitPage";
import {Manufacturer} from "./models";

const ManufacturePage = () => {
    const [ManufactureList, setManufactureList] = useState<Manufacturer[]>([
        /*{
            id: 0,
            name: 'Manufacture 1'
        },
        {
            id: 1,
            name: 'Manufacture 2'
        }*/
    ]);

    const getManufacturies=()=>{
        mitrofanovaAxios.get<{
            items: Manufacturer[] }>("https://canstudy.ru/orderapi/Manufacture/list")
            .then(res=>setManufactureList(res.data.items))
    }
    useEffect(()=>{
        getManufacturies();
    }, [])
    const onDeleteClick = (id: number) => {

        mitrofanovaAxios.delete(`https://canstudy.ru/orderapi/Manufacture/${id}`)
            .then(()=>{
                setManufactureList(prev => [...prev.filter(el => el.id !== id)])
            })
    }
    const onEditClick = (id: number) => {
        const curManufacture = ManufactureList.find(el => el.id === id);
        setEditManufacture(curManufacture);
    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex:1
        },
        {
            field: 'name',
            headerName: 'Название',
            flex:1
        },
        {
            field: 'country',
            headerName: 'страна',
            flex:1
        },
        {
            field: 'city',
            headerName: 'город',
            flex:1
        },
        {
            field: '',
            headerName: '',
            renderCell: (e: any) => {
                return <div>
                    <IconButton
                        onClick={() => onEditClick(e.row.id)}
                        aria-label="edit">
                        <EditIcon/>
                    </IconButton>

                    <IconButton
                        onClick={() => onDeleteClick(e.row.id)}
                        aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                </div>
            }
        }
    ]

    const [createPopupOpened, setCreatePopupOpened] = useState(false);
    const [editManufacture, setEditManufacture] = useState<Manufacturer | null>(null);

    const onCreate = (Manufacture: Manufacturer) => {
        setManufactureList(prev => [...prev, Manufacture])
    }
    const onEdit = (Manufacture: Manufacturer) => {
        setManufactureList(prev => {
            const curManufacture = prev.find(el => el.id === Manufacture.id);
            curManufacture.name = Manufacture.name;

            return [...prev]
        })

    }

    return (
        <div style={{width: '100%'}}>
            {/*{createPopupOpened && <CreateManufacturePopUp
                onCreate={(Manufacture: Manufacture) => onCreate(Manufacture)}
                open={createPopupOpened}
                onClose={() => setCreatePopupOpened(false)}
            ></CreateManufacturePopUp>}

            {editManufacture != null && <EditManufacturePopUp
                open={editManufacture != null}
                onClose={() => setEditManufacture(null)}
                Manufacture={editManufacture}
                onEdit={(Manufacture: Manufacture) => onEdit(Manufacture)}
            />}*/}

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1>Производитель</h1>
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
                    rows={ManufactureList}
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

export default ManufacturePage;