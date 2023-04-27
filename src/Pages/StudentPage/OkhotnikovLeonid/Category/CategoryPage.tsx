import React, {useEffect, useState} from 'react';
import {Category} from "./models";
import CategoryElement from "./CategoryElement";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Button, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import OkhotnikovPopUp from "../../../../Components/Okhotnikov/OkhotnikovPopUp/OkhotnikovPopUp";
import Createcategorypopup from "./Popups/Createcategorypopup";
import EditCategoryPopup from "./Popups/EditCategoryPopup";
import {okhotnikovAxios} from "../OkhotnikovLeonid";

const CategoryPage = () => {
    const [categoryList, setcategoryList] = useState<Category[]>([])
    const onDeleteClick = (id:number) =>{
        okhotnikovAxios.delete(`https://canstudy.ru/orderapi/category/${id}`)
            .then(()=>{
                setcategoryList(prev=>[
                    ...prev.filter(el=>el.id!==id)
                ])
            })
        setcategoryList(prev => [...prev.filter(el => el.id !== id)])

    }
    const getCategories = () =>{
        okhotnikovAxios.get<{ items: Category[]
        }>('https://canstudy.ru/orderapi/category/list')
            .then(res=>{setcategoryList(res.data.items);
            })
    }
    useEffect(()=>{
        getCategories()
    },[])

    const onEditClick = (id:number) =>{
        const curCategory = categoryList.find(el=>el.id===id)
        setEditCategory(curCategory)
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
    const [editCategory, setEditCategory]=useState<Category|null>(null)
    const onCreate = (category:Category) =>{
        setcategoryList(prev=>[...prev,category])
    }
    const onEdit = (category:Category)=>{
        setcategoryList(prev=>{
            const curCategory = prev.find(el=>el.id===category.id)!;
            curCategory.name = category.name;
            return[...prev]
        })
    }
    return (

        <div style={{width:'100%'}}>
            {createPopupOpened && <Createcategorypopup
                onCreate={(category)=>onCreate(category)}
                open={createPopupOpened}
                onClose={()=>setCreatePopupOpened(false)}
                />}
            {editCategory!==null&&<EditCategoryPopup
            open={editCategory!==null}
            onClose={()=>setEditCategory(null)}
            category={editCategory}
            onEdit={(category)=>onEdit(category)}
            />}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <h1>Category</h1>
                <div>
                    <Button color={'primary'}
                            variant={'contained'}
                            onClick={()=> setCreatePopupOpened(true)}
                    >
                        Add Category
                    </Button>
                </div>
            </div>

            <div style={{width:"100%", height:"80vh"}}>
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