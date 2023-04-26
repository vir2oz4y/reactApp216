import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import ProkhorovPopup, {IPopup} from "../../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup";
import {Category} from '../models';

type Props = IPopup & {
    onCreate: (category: Category) => void;
}
const CreateCategoryPopup = ({ onClose, open, onCreate }: Props) => {

    const [categoryName, setCategoryName] = useState('')

    const onCreateClick = () => {
        onCreate({
            id: Math.random(),
            name: categoryName
        })
        onClose();
    }
    return (
        <ProkhorovPopup
            open={open}
            onClose={() => onClose()}
            title={'Создание категории'}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'qem' }}>
                <TextField
                    variant={'standard'}
                    fullWidth={true}
                    label={'Название категории'}
                    value={categoryName}
                    onChange={e => setCategoryName(e.target.value)}
                />
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

export default CreateCategoryPopup;


