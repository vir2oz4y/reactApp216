import { Button, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';
import react from 'react';
import './TyrylginPopUp.scss';
import CloseIcon from '@mui/icons-material/Close';

export type IPopup = {
    open:boolean;
    onClose:()=>void;
}

type Props = IPopup & {
    title:string;
    children:any;
}
const TyrylginPopUp = ({open, onClose, title, children}:Props) => {

    return (
        <Modal
            open={open}
            onClose={() => { }}
            
        >
            <Typography className={'tyrylgin_popup'}>
                <div className={'tyrylgin_popup__content'}>
                    <div className={'tyrylgin_popup__content__title' }>
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

export default TyrylginPopUp;