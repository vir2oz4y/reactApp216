import { Button } from '@mui/material';
import React from 'react';
import { Category } from './models';

type props = {
    category: Category,
    onDeleteClick: () => void;
}

const CategoryElement = ({ category, onDeleteClick}:props) => {
    return (
        <div>
            <div>
                {category.name}
            </div>
            <div>
                <Button onClick={() => onDeleteClick()}
                    color={'primary'}
                    variant={"contained"}
                >
                    Delete
                </Button>
            </div>

        </div>
    );
};

export default CategoryElement;