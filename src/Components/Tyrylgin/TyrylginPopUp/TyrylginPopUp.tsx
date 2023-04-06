import { Button, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';
import react from 'react';
import './TyrylginPopUp.scss';
import CloseIcon from '@mui/icons-material/Close';

const TyrylginPopUp = () => {

    return (
        <Modal
            open={true}
            onClose={() => { }}
            
        >
            <Typography className={'tyrylgin_popup'}>
                <div className={'tyrylgin_popup__content'}>
                    <div className={'tyrylgin_popup__content__header'}>
                        <div className={'tyrylgin_popup__content__header__title' }>Hello N-I-G-G-A</div>
                        <IconButton className={'tyrylgin_popup__content__header__closebutton'} aria-label="close">
                            <CloseIcon

                            />
                        </IconButton>
                        
                    </div>
                </div>
            </Typography>
        </Modal>)
}

export default TyrylginPopUp;