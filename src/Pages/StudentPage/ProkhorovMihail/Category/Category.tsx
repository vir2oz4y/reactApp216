import { Button, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';
import CategoryElement from './CategoryElement/CategoryElement';
import { Category } from './models';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ProkhorovPopup from '../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup';
import CreateCategoryPopup from './Popups/CreateCategoryPopup';
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
            headerName: 'ID'
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
                        onClick={ ()=> onDeleteClick(e.row.id) }aria-label="delete">
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



    const [createPopupOpened, setCreatePopupOpened] = useState(false);
    const[editCategory,setEditCategory] = useState<Category|null>(null)

    const onEdit=(category:Category)=>{
        setcategoryList(prev=>[...prev,category])
        const curCategory = prev.find(el=>el.id == category.id)!;
        curCategory.name = category.name;
        return[...prev]
    }

    return (
        <div style={{ width: '100%' }}>

            {createPopupOpened && <CreateCategoryPopup
                onCreate={(category)=>onCreate(category)}
                open={createPopupOpened}
                onClose={()=>setCreatePopupOpened(false)}
            />}
            {editCategory !== null && <EditCategoryPopup
                open{editCategory !== null}
                onClose={()=>setEditCategory(null)}

                />}
            <div style={{ display: 'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                <h1>Category</h1>
                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={()=>setCreatePopupOpened(true)}
                    >
                        Add Category
                        </Button>
                    </div>
            </div>

            <div style={{ width: '100%', height: '80vh' }}>
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