import React from 'react';
import './OkhotnikovPopUp.scss';
import {Button, IconButton, Modal, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';



const OkhotnikovPopUp = () => {
    return(
        <Modal
            open={true}
            onClose={()=>{}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={'okhotnikov_popup'}>
                <Typography className={'okhotnikov_popup__content'}>
                <Typography className={'okhotnikov_popup__header'}>
                    <div>ыщы</div>
                    <div><Button color={'primary'}
                                 variant={'contained'}
                    >
                        <IconButton aria-label="delete">
                            <CloseIcon />
                        </IconButton>
                    </Button></div>
                </Typography>


                </Typography>

            </div>
        </Modal>
    )
}
export default OkhotnikovPopUp;