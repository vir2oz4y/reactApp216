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
                onClick={()=>navigate('test1')}>
                    <ListItemText primary="Test1" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('test2')}>
                    <ListItemText primary="Test2" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default AsideMenu;