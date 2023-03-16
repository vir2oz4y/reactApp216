import React from 'react';
import {Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useNavigate} from "react-router-dom";

const AsideMenu = () => {
    const navigate = useNavigate();
    return (
        <div>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('Test1')}>
                            <ListItemText primary="Test1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>navigate('Test2')}>
                            <ListItemText primary="Test2" />
                        </ListItemButton>
                    </ListItem>
                </List>
        </div>
    )
}

export default AsideMenu;