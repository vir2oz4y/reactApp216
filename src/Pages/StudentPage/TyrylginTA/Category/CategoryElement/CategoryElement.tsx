import { Button } from '@mui/material';
import React from 'react';
import { Category } from './../models'

type Props = {
    category: Category
    onDeleteClick: () => void;
}

const CategoryElement = ({ category, onDeleteClick }: Props) => {
    return (
        <div>
            <div>
                {category.name}
            </div>

            <div>
                <Button
                    onClick={() => onDeleteClick()}
                    color={'primary'}
                    variant={'contained'}
                >
                    Удалить
                </Button>
            </div>
        </div>
    );
};

export default CategoryElement;