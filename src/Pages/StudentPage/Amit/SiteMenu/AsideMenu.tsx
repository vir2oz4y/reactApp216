import React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const AsideMenu = () => {
    const navigate=useNavigate();

    return (
        <List>
                <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Category')}>
                    <ListItemText primary="Category" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Client')}>
                    <ListItemText primary="Client" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Manufacturer')}>
                    <ListItemText primary="Manufacturer" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Product')}>
                    <ListItemText primary="Product" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('Purchase')}>
                    <ListItemText primary="Purchase" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('User')}>
                    <ListItemText primary="User" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default AsideMenu;