import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KryuchkovPopup, { IPopup } from "../../../../../Components/Kryuchkov/KryuchkovPopup/KryuchkovPopup";
import { Product } from "../models";
import { kryuchkovAxios } from "../../KryuchkovNickPage";
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
        kryuchkovAxios.get<{ items: Category[] }>(
            'https://canstudy.ru/orderapi/category/list'
        )
            .then(res => {
                setcategoryList(res.data.items);
            })
    }

    const [ManufacturerList, setManufacturerList] = useState<Manufacturer[]>([])

    const getManufacturies = () => {
        kryuchkovAxios.get<{ items: Manufacturer[] }>(
            'https://canstudy.ru/orderapi/Manufacturer/list'
        )
            .then(res => {
                setManufacturerList(res.data.items);
            })
    }

    useEffect(() => {
        getCategories()
        getManufacturies();
    }, [])

    const onCreateClick = () => {
        kryuchkovAxios
            .post<{ item: Product }>(
                'https://canstudy.ru/orderapi/Product',
                {
                    ...Product,
                }
            )
            .then(res => {
                onCreate(res.data.item)
                onClose();
            })
    }

    return (
        <KryuchkovPopup
            open={open}
            onClose={() => onClose()}
            title={'�������� ��������'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
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
                            <MenuItem value={el.id?.toString()}>{el.name}</MenuItem>)
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
                        {ManufacturerList.map((el, i) =>
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
                        �������
                    </Button>
                </div>

            </div>
        </KryuchkovPopup>
    );
};

export default CreateProductPopup;