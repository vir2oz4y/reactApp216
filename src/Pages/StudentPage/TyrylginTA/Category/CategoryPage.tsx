import { Button, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, {useState} from 'react';
import CategoryElement from './CategoryElement/CategoryElement';
import { Category } from './models';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TyrylginPopUp from '../../../../Components/Tyrylgin/TyrylginPopUp/TyrylginPopUp';
const CategoryPage = () => {

    const [categoryList, setcategoryList] = useState<Category[]>([
        {
            id: 0,
            name: 'Category 1'
        },
        {
            id: 1,
            name: 'Category 2'
        }
    ])

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            //flex:1
        },
        {
            field: 'name',
            headerName: 'Name',
            //flex:1
        },
        {
            field: '',
            headerName: '',
            renderCell: (e: any) => {
                return <div>
                    <IconButton aria-label="edit">
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

    const onDeleteClick = (id: number) => {
        setcategoryList(prev => [
            ...prev.filter(el => el.id !== id)
        ])
    }

    return (
        <div style={{ width: '100%' }}>

            <TyrylginPopUp></TyrylginPopUp>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <h1>Category</h1>

                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                    >
                        Add Category
                    </Button>
                </div>
            </div>
            

            <div style={{ width:'100%', height:'80vh'}}>
                <DataGrid
                    rows={categoryList}
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

export default CategoryPage;