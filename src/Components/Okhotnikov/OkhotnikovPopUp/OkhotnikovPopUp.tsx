import React from 'react';
import './OkhotnikovPopUp.scss';
import {Button, IconButton, Modal, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export type IPopup = {
    open:boolean;
    onClose:()=>void;
}

type Props = IPopup & {
    title: string,
    children:any
}
const OkhotnikovPopUp = ({open, onClose, title, children}:Props) => {
    return (
        <Modal
            open={true}
            onClose={() => {
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={'okhotnikov_popup'}>
                <Typography className={'okhotnikov_popup__content'}>
                    <Typography className={'okhotnikov_popup__header'}>
                        <div>{title}</div>
                        <div><Button color={'primary'}
                                     variant={'contained'}
                        >
                            <IconButton aria-label="delete"
                            onClick={()=>onClose()}>
                                <CloseIcon/>
                            </IconButton>
                        </Button></div>
                        <div>{children}</div>
                    </Typography>


                </Typography>

            </div>
        </Modal>
    )
}
export default OkhotnikovPopUp;