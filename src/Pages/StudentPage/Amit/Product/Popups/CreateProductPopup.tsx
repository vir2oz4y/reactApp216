import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import MitrofanovaPopUp, { IPopup } from "../../../../../Components/Mitrofanova/MitrofanovaPopUp/MitrofanovaPopUp";
import { Product } from '../models';
import { mitrofanovaAxios } from "../../AmitPage";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Manufacturer } from '../../Manufacturer/models';


type Props = IPopup & {
    onCreate: (Product: Product) => void;
}
const CreateProductPopUp = ({ open, onClose, onCreate }: Props) => {
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

    const [categoryList, setcategoryList] = useState<Manufacturer[]>([
        
    ]);

    const getCategories = () => {
        mitrofanovaAxios.get<{
            items: Manufacturer[]
        }>("https://canstudy.ru/orderapi/category/list")
            .then(res => setcategoryList(res.data.items))
    }


    const [ManufacturerList, setManufactureList] = useState<Manufacturer[]>([
        /*{
            id: 0,
            name: 'Manufacture 1'
        },
        {
            id: 1,
            name: 'Manufacture 2'
        }*/
    ]);

    const getManufacturies = () => {
        mitrofanovaAxios.get<{
            items: Manufacturer[]
        }>("https://canstudy.ru/orderapi/Manufacturer/list")
            .then(res => setManufactureList(res.data.items))
    }


    useEffect(() => {
        getCategories();
        getManufacturies();
    }, [])

    const onCreateClick = () => {

        mitrofanovaAxios.post<{ item: Product }>("https://canstudy.ru/orderapi/Product",
            {
                ...Product,                
            })

            .then(res => { onCreate(res.data.item) })
        onClose();
        /*onCreate({
            id: Math.random(),
            name: ProductName
        })*/
    }

    return (
        <MitrofanovaPopUp
            open={open}
            onClose={() => onClose()}
            title={'Add Product'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <TextField variant="standard"
                    fullWidth={true}
                    label={'name'}
                    value={Product.name}
                    onChange={e => setProduct(prev => ({ ...prev, name: e.target.value }))}
                />

                <TextField variant="standard"
                    fullWidth={true}
                    label={'description'}
                    value={Product.description}
                    onChange={e => setProduct(prev =>
                        ({ ...prev, description: e.target.value }))}
                />

                <TextField variant="standard"
                    fullWidth={true}
                    label={'cost'}
                    value={Product.cost}
                    onChange={e => setProduct(prev =>
                        ({ ...prev, cost: e.target.value as any }))}
                />

                <TextField variant="standard"
                    fullWidth={true}
                    label={'category Name'}
                    value={Product.categoryName}
                    onChange={e => setProduct(prev =>
                        ({ ...prev, categoryName: e.target.value }))}
                />

                <TextField variant="standard"
                    fullWidth={true}
                    label={'manufacturerName'}
                    value={Product.manufacturerName}
                    onChange={e => setProduct(prev =>
                        ({ ...prev, manufacturerName: e.target.value }))}
                />

                <FormControl fullWidth>
                    <InputLabel id="Category">Category</InputLabel>
                    <Select
                        labelId="Category"
                        value={Product.categoryId?.toString()}
                        label="Category"
                        onChange={(e) => setProduct(prev => ({
                            ...prev, categoryId: e.target.value as any
                        }))}
                    >
                        {
                            categoryList.map((el, i) => <MenuItem value={el.id?.toString()}>{ el.name}</MenuItem>)
                        }                        
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="Manufacturer">Manufacturer</InputLabel>
                    <Select
                        labelId="Manufacturer"
                        value={Product.categoryId?.toString()}
                        label="Manufacturer"
                        onChange={(e) => setProduct(prev => ({
                            ...prev, manufacturerId: e.target.value as any
                        }))}
                    >
                        {
                            ManufacturerList.map((el, i) =>
                                <MenuItem value={el.id?.toString()}>{el.name}</MenuItem>)
                        }
                    </Select>
                </FormControl>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        onClick={() => onCreateClick()}
                        color={'primary'}
                        variant={'contained'}
                    >
                        create
                    </Button>
                </div>

            </div>
        </MitrofanovaPopUp>
    );
};

export default CreateProductPopUp;