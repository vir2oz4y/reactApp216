import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import {useNavigate} from "react-router-dom";

const AsideMenu = () => {

    const navigate = useNavigate();

    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('category')}>
                    <ListItemText primary="category" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('client')}>
                    <ListItemText primary="client" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('manufacturer')}>
                    <ListItemText primary="manufacturer" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                onClick={()=>navigate('order')}>
                    <ListItemText primary="order" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('product')}>
                    <ListItemText primary="product" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('purchase')}>
                    <ListItemText primary="purchase" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('user')}>
                    <ListItemText primary="user" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default AsideMenu;