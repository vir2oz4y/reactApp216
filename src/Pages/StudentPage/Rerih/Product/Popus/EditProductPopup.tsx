import {Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import  React, {useEffect, useState } from 'react'
import RerihPopup, {IPopup} from "../../../../../Components/Rerih/RerihPopup/RerihPopup";
import { Product } from '../models';
import {RerihAxios} from "../../RerihPage";
import { Manufacturer } from '../../Manufacturer/models';


type Props = IPopup & {
    onEdit: (newProduct: Product) => void;
    Product: Product
}

const EditProductPopUp = ({open, onClose, Product:ProductEdit, onEdit}: Props) => {

    const [Product, setProduct] = useState(ProductEdit)

    const onEditClick = () => {

        RerihAxios.patch<{ item:Product }>('https://canstudy.ru/orderapi/Product',
            {
                item:{
                    ...Product
                }
            })
            .then(response => {
                onEdit(response.data.item)
                onClose();
            })
    }

    const [categoryList, setCategoryList] = useState<Product[]>([])

    const [manufactureList, setManufactureList] = useState<Manufacturer[]>([])

    const getCategories = () => {
        RerihAxios<{ items: Product[] }>('https://canstudy.ru/orderapi/category/list')
            .then(response => {
                setCategoryList(response.data.items);
            })
    }

    const getManufacturies = () => {
        RerihAxios.get<{ items: Manufacturer[] }>('https://canstudy.ru/orderapi/manufacturer/list')
            .then(response => {
                setManufactureList(response.data.items);
            })
    }

    useEffect(() => {
        getCategories();
        getManufacturies();
    }, [])


    return (
        <RerihPopup
            title={'Изменение клиента'}
            open={open}
            onClose={() => onClose()}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em'
                }}
            >
                <TextField
                    label="Название"
                    variant="standard"
                    fullWidth={true}
                    value={Product.name}
                    onChange={e => setProduct(prev => ({...prev, name: e.target.value}))}
                />

                <TextField
                    label="Описание"
                    variant="standard"
                    fullWidth={true}
                    value={Product.description}
                    onChange={e => setProduct(prev => ({...prev, description: e.target.value}))}
                />


                <TextField
                    label="Цена"
                    variant="standard"
                    fullWidth={true}
                    value={Product.cost}
                    onChange={e => setProduct(prev => ({...prev, cost: e.target.value as any}))}
                />

                <FormControl fullWidth>
                    <InputLabel id="category">Категория</InputLabel>
                    <Select
                        labelId="category"
                        value={Product.categoryId?.toString()}
                        label="Категория"
                        onChange={(e) => setProduct(prev => ({...prev, categoryId: e.target.value as any}))}
                    >
                        {categoryList.map((el, i) =>
                            <MenuItem value={el.id.toString()}>{el.name}</MenuItem>)
                        }

                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="manufacturer">Производитель</InputLabel>
                    <Select
                        labelId="manufacturer"
                        value={Product.manufacturerId?.toString()}
                        label="Производитель"
                        onChange={(e) => setProduct(prev => ({...prev, manufacturerId: e.target.value as any}))}
                    >
                        {manufactureList.map((el, i) =>
                            <MenuItem value={el.id.toString()}>{el.name}</MenuItem>)
                        }

                    </Select>
                </FormControl>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => onEditClick()}
                    >
                        Изменить
                    </Button>
                </div>

            </div>
        </RerihPopup>
    );
};

export default EditProductPopUp;