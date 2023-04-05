import { Button } from '@mui/material';
import React from 'react';
import { Category } from "./../models";

type Props = {
    category: Category,
    onDeleteClick: () => void;
}

const CategoryElement = ({ onDeleteClick, category }: Props) => {
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
                    delete
                    </Button>
            </div>
        </div>
        
    );
};

export default CategoryElement;