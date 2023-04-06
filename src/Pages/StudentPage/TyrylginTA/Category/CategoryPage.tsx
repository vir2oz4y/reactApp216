import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, {useState} from 'react';
import CategoryElement from './CategoryElement/CategoryElement';
import { Category } from './models';
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
            headerName:'ID'
        },
        {
            field: 'name',
            headerName:'Name'
        }
    ]


    const onDeleteClick = (id: number) => {
        setcategoryList(prev => [
            ...prev.filter(el => el.id !== id)
        ])
    }

    return (
        <div>
            <h1>Category</h1>

            <div>
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
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    );
};

export default CategoryPage;