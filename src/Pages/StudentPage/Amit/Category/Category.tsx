import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { useState } from 'react';
import CategoryElement from './CategoryElement';
import { Category } from './models';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MitrofanovaPopUp from '../../../../Components/Mitrofanova/MitrofanovaPopUp/MitrofanovaPopUp';

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
    ]);

    const onDeleteClick = (id: number) => {
        setcategoryList(prev => [...prev.filter(el => el.id !== id)])
    }

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName:'ID'
        },
        {
            field: 'name',
            headerName: 'Name'
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
                        onClick={() => onDeleteClick(e.row.id) }
                        aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
        }
    ]

   
    return (
        <div style={{ width: '100%' }}>
            <MitrofanovaPopUp></MitrofanovaPopUp>

            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
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
        <div style={{width:'100%', height:'80vh'} }>
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