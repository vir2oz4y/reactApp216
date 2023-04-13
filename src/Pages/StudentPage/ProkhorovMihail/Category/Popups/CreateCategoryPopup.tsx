import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';
import ProkhorovPopup, {IPopup} from "../../../../../Components/Prokhorov/ProkhorovPopup/ProkhorovPopup";
import {Category} from '../models';

type Props = IPopup & {
    onEdit: (category: Category) => void;
    category:Category
}
const EditCategoryPopup = ({onClose, open, onEdit}: Props) => {

        const [categoryName, setCategoryName] = useState('')

        const onCreateClick = () => {
            onCreate({
                    id: Math.random(),
                    name: categoryName
                }
            )
            onClose();
        }


        return (<ProkhorovPopup
                open={open}
                onClose={() => onClose()}
                title={'редактирование категории'}
            >
                <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                    <TextField
                        variant={'standard'}
                        fullWidth={true}
                        label={'название кактегории'}
                        value={edit.Category.name}
                        onChange={e =>
                            setEditCategory({...prev=>({...prev,name:e.target.value})}
                    />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            color={'primary'}
                            variant={'contained'}
                            onClick={() => onCreateClick()}
                        >
                            создать
                        </Button>
                    </div>
                </div>
            </ProkhorovPopup>
        );
    }
;

export default EditCategoryPopup;