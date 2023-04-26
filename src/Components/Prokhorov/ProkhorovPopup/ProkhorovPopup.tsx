import {IconButton, Modal} from '@mui/material';
import React from 'react';
import react from 'react';
import './ProkhorovPopup.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

export type IPopup = {
    open:boolean;
    onClose:()=>void;
}

type Props = IPopup & {
    title:string,
    children:any
}

const ProkhorovPopup = ({open, children, title, onClose}:Props) => {
    return (
        <Modal
            open={true}
            onClose={() => { }}
            
        >

            <div className={'prokhorov_popup'}>
                <div className={'prokhorov_popup__content'}>
                    <div className={'big__box'}>
                        <div className={'box'}>
                            <div className={'text'}>
                                <div>{title}</div>
                            </div>
                            <IconButton
                                
                                onClick={()=>onClose()}
                                >
                                <CloseIcon/>
                            </IconButton>
                            {/*<TextField id="standard-basic" label="vashi_pozhelaniya" variant="standard" />*/}
                            {/*<Button variant="outlined">NE NADO DYADYA</Button>*/}
                            <div>{children}</div>
                        </div>
                        {/*<div><img src="22a5_1398.jpg" alt=""/>*/}
                        {/*</div>*/}
                    </div>
                </div>
                
            </div>
            </Modal>)

            }

export default ProkhorovPopup;