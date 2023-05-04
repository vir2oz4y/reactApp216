import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProkhorovPopup, { IPopup } from "../../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup";
import { Product } from '../models';
import { prokhorovAxios } from "../../ProkhorovMihailPage";
import { Category } from '../../Category/models';
import { Manufacturer } from '../../Manufacturer/models';

type Props = IPopup & {
    onCreate: (Product: Product) => void;
}
const CreateProductPopup = ({ onClose, open, onCreate }: Props) => {

    const [Product, setProduct] = useState<Product>({
        id: 0,
        categoryId: 0,
        manufacturerId: 0,
        name: '',
        cost: 0,
        description: '',
        categoryName: '',
        manufacturerName: ''

    })

    const [categoryList, setcategoryList] = useState<Category[]>([])

    const getCategories = () => {
        prokhorovAxios.get<{ items: Category[] }>('https://canstudy.ru/orderapi/category/list')
            .then(res => {
                setcategoryList(res.data.items);
            })
    }
    useEffect(() => {
        getCategories()
    }, [])

    const [ManufacturerList, SeManufacturerList] = useState<Manufacturer[]>([])

    const getManufacturies = () => {
        prokhorovAxios.get<{ items: Manufacturer[] }>('https://canstudy.ru/orderapi/category/list')
            .then(res => {
                SeManufacturerList(res.data.items);
            })
    }

    useEffect(() => {
        getManufacturies()
    }, [])

    const onCreateClick = () => {
        prokhorovAxios.post<{
            item: Product
        }>('https://canstudy.ru/orderapi/Product', {
            ...Product,
            
        }
        )
            .then(res => {
                onCreate(res.data.item)
                onClose();
            })
    }
    return (
        <ProkhorovPopup
            open={open}
            onClose={() => onClose()}
            title={'Создание продукта'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'qem' }}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'FirstName'}
                    value={Product.name}
                    onChange={e => setProduct(prev => ({ ...prev, name: e.target.value }))}
                />
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'description'}
                    value={Product.description}
                    onChange={e => setProduct(prev => ({ ...prev, description: e.target.value }))}
                />
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'cost'}
                    value={Product.cost}
                    onChange={e => setProduct(prev => ({ ...prev, cost: e.target.value as any }))}
                />
                <FormControl fullWidth>
                    <InputLabel id="Category">Sex</InputLabel>
                    <Select
                        labelId="Category"

                        value={Product.categoryId?.toString()}
                        label="Category"
                        onChange={(e) => setProduct(prev => ({
                            ...prev,
                            categoryId: e.target.value as any
                        }))}
                    >
                        {categoryList.map((el,i)=> <MenuItem value={el.id?.toString()}>{el.name}</MenuItem>)}
                        
                     
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="manufacture">manufacture</InputLabel>
                    <Select
                        labelId="manufacture"

                        value={Product.manufacturerId?.toString()}
                        label="manufacture"
                        onChange={(e) => setProduct(prev => ({
                            ...prev,
                            manufacturerId: e.target.value as any
                        }))}
                    >
                        {ManufacturerList.map((el, i) => <MenuItem value={el.id?.toString()}>{el.name}</MenuItem>)}


                    </Select>
                </FormControl>
               
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onCreateClick()}
                    >
                        Создать
                    </Button>
                </div>
            </div>
        </ProkhorovPopup>
    );
};

export default CreateProductPopup;



function sex<T>(arg0: string, arg1: any, sex: any, arg3: number) {
    throw new Error('Function not implemented.');
}
