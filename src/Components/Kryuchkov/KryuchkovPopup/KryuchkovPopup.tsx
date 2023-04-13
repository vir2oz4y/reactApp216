import {IconButton, Modal, Typography } from '@mui/material';
import React from 'react';
import './KryuchkovPopup.scss';
import CloseIcon from '@mui/icons-material/Close';

export type IPopup = {
    open:boolean;
    onClose:()=>void;
}

type Props = IPopup & {
    title:string,
    children:any
}

const KryuchkovPopup = ({open, onClose, title, children}:Props) => {

    return (
        <Modal
            open={open}
            onClose={() => onClose()}
        >
            <Typography className={'kryuchkov_popup'}>
                <div className={'kryuchkov_popup__content'}>
                    <div className={'kryuchkov_popup__content__title'}>
                        <div>
                            {title}
                        </div>

                        <div>
                            <IconButton
                                onClick={()=>onClose()}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </div>

                    <div>
                        {children}
                    </div>
                </div>
            </Typography>
        </Modal>)
}

export default KryuchkovPopup;