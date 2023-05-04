import { Button, IconButton } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
/*import ProductElement from './ProductElement/ProductElement';*/
import { Product } from './models';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ProkhorovPopup from '../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup';
// import CreateProductPopup from './Popups/CreateProductPopup';
// import EditProductPopup from './Popups/EditProductPopup';
import { prokhorovAxios } from "../ProkhorovMihailPage";
import CreateProductPopup from './Popups/CreateProductPopup';

const ProductPage = () => {

    const [ProductList, setProductList] = useState<Product[]>([])

    const getCategories = () => {
        prokhorovAxios.get<{ items: Product[] }>('https://canstudy.ru/orderapi/Product/list')
            .then(res => {
                setProductList(res.data.items);
            })
    }
    useEffect(() => {
        getCategories()
    }, [])

    const onDeleteClick = (id: number) => {

        prokhorovAxios.delete(`https://canstudy.ru/orderapi/Product/${id}`)
            .then(() => {
                setProductList(prev => [
                    ...prev.filter(el => el.id !== id)
                ])
            })
        // setProductList(prev => [
        //     ...prev.filter(el => el.id !== id)
        // ])
    }

    const onEditClick = (id: number) => {
        const curProduct = ProductList.find(el => el.id === id)!;
        setEditProduct(curProduct)
    }



    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID'
        },
        {
            field: ' name',
            headerName: ' name'
        },
        {
            field: 'description',
            headerName: 'description'
        },
        {
            field: 'lastName',
            headerName: 'lastName'
        },
        {
            field: 'cost',
            headerName: 'cost'
        },
        {
            field: 'email',
            headerName: 'email'
        },
        {
            field: 'categoryName',
            headerName: 'categoryName'
        },
        {
            field: 'manufacturerName',
            headerName: 'manufacturerName'
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
                        onClick={() => onDeleteClick(e.row.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
        }
    ]

    const [createPopupOpened, setCreatePopupOpened] = useState(false);
    const [editProduct, setEditProduct] = useState<Product | null>(null)
    const onCreate = (Product: Product) => {
        setProductList(prev => [...prev, Product])
    }


    const onEdit = (Product: Product) => {
        setProductList(prev => {
            const curProduct = prev.find(el => el.id === Product.id)!;
            /*curProduct.firstName = Product.firstName;
            curProduct.lastName = Product.lastName;
            curProduct.sex = Product.sex;
            curProduct.email = Product.email;
            curProduct.firstName = Product.firstName;*/


            return [...prev]
        })
    }

    return (
        <div style={{ width: '100%' }}>


            {createPopupOpened && <CreateProductPopup
                onCreate={(Product) => onCreate(Product)}
                open={createPopupOpened}
                onClose={() => setCreatePopupOpened(false)}
            />}

            {/*{editProduct !== null && <EditProductPopup
                open={editProduct !== null}
                onClose={() => setEditProduct(null)}
                Product={editProduct}
                onEdit={(Product) => onEdit(Product)}
            />}*/}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Product</h1>
                <div>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => setCreatePopupOpened(true)}
                    >
                        Add Product
                        </Button>
                </div>
            </div>

            <div style={{ width: '100%', height: '80vh' }}>
                <DataGrid
                    rows={ProductList}
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

export default ProductPage;