import { Modal, Typography } from '@mui/material';
import React from 'react';
import './KryuchkovPopup.scss';

const KryuchkovPopup = () => {

    return (
        <Modal
            open={true}
            onClose={() => {

            }}
        >
            <Typography className={'kryuchkov_popup'}>
                <div className={'kryuchkov_popup__content'}>
                    12231241412
                </div>
            </Typography>
        </Modal>)
}

export default KryuchkovPopup;