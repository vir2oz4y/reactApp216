import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import React from 'react';
import {useNavigate} from "react-router-dom";

const AsideMenu = () => {

    const navigate = useNavigate();

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('category')}
                >
                    <ListItemText primary="Category" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={()=>navigate('client')}
                >
                    <ListItemText primary="Client" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('manufacturer')}
                >
                    <ListItemText primary="Manufacturer" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('product')}
                >
                    <ListItemText primary="Product" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('order')}
                >
                    <ListItemText primary="Order" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default AsideMenu;