import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import React from 'react';
import './MitrofanovaPopUp.scss';

export type IPopup={
    open: boolean;
    onClose:()=>void;
}

type Props=IPopup &{
    title: string;
    children: any
}

const MitrofanovaPopUp = ({open, onClose,title, children}:Props) => {
    return (
        <Modal
            open={open}
            onClose={() => { }}
        >
            <div className={'mitrofanova_popup'}>
                <div className={'mitrofanova_popup_style'}>

                <div className={'mitrofanova_popup_content'}>
                       {/* <h1 style={{ margin: '5px'}}> Add Category</h1>
                        <Button variant="text" >Close</Button>*/}
                    <div> {title}</div>

                    <div>
                        <Button onClick={()=>onClose()} variant="text" >Close</Button>
                    </div>

                </div>

                <div className={'mitrofanova_popup_content_in'}>
                    {/*<TextField id="outlined-basic1" label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic2" label="Outlined" variant="outlined" />
                    <Button variant="outlined">Add</Button>*/}
                    {children}
                </div>
                </div>
            </div>
          </Modal>
            )
            }
export default MitrofanovaPopUp;

/*<div>

</div>*/