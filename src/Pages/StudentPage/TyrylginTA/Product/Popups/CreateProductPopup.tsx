import React, { useEffect, useState } from 'react';
import TyrylginPopUp, { IPopup } from "../../../../../Components/Tyrylgin/TyrylginPopUp/TyrylginPopUp";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Product } from "../models";
import { TyrylginAxios } from "../../TyrylginTAPage";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Category } from '../../Category/models';
import { Manufacturer } from '../../Manufacturer/models';
import { caES } from '@mui/material/locale';

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
        TyrylginAxios.get<{ items: Category[] }>(
            'https://canstudy.ru/orderapi/category/list'
        )
            .then(res => {
                setcategoryList(res.data.items);
            })
    }

    useEffect(() => {
        getCategories()
    }, [])


    const [manufacturerList, setManufacturerList] = useState<Manufacturer[]>([])

    const getManufacturers = () => {
        TyrylginAxios.get<{ items: Manufacturer[] }>(
            'https://canstudy.ru/orderapi/Manufacturer/list'
        )
            .then(res => {
                setManufacturerList(res.data.items);
            })
    }

    useEffect(() => {
        getCategories()
        getManufacturers()
    }, [])

    const onCreateClick = () => {

        TyrylginAxios
            .post<{ item: Product }>(
                'https://canstudy.ru/orderapi/Product',
                {
                    ...Product
                }

            )
            .then(res => {
                onCreate(res.data.item)
                onClose();
            })
    }
    return (
        <TyrylginPopUp
            open={open}
            onClose={() => onClose()}
            title={'Add Product'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'qem' }}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'name'}
                    value={Product.name}
                    onChange={e => setProduct(prev => ({
                        ...prev,
                        name: e.target.value
                    }))}
                />
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'description'}
                    value={Product.description}
                    onChange={e => setProduct(prev => ({
                        ...prev,
                        description: e.target.value
                    }))}
                />
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'cost'}
                    value={Product.cost}
                    onChange={e => setProduct(prev => ({
                        ...prev,
                        cost: e.target.value as any
                    }))}
                />

                <FormControl fullWidth>
                    <InputLabel id="Category">Category</InputLabel>
                    <Select
                        labelId="Category"
                        value={Product.categoryId?.toString()}
                        label="Category"
                        onChange={(e) => setProduct(prev => ({
                            ...prev,
                            categoryId: e.target.value as any
                        }))}
                    >
                        {categoryList.map((el, i) =>
                            <MenuItem value={el.id?.toString()}>{el.name }</MenuItem>)
                        }
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="Manufacturer">Manufacturer</InputLabel>
                    <Select
                        labelId="Manufacturer"
                        value={Product.manufacturerId?.toString()}
                        label="Manufacturer"
                        onChange={(e) => setProduct(prev => ({
                            ...prev,
                            manufacturerId: e.target.value as any
                        }))}
                    >
                        {manufacturerList.map((el, i) =>
                            <MenuItem value={el.id?.toString()}>{el.name}</MenuItem>)
                        }
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
        </TyrylginPopUp>
    );
};

export default CreateProductPopup;