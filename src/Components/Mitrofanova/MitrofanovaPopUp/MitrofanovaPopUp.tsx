import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import React from 'react';
import './MitrofanovaPopUp.scss';

const MitrofanovaPopUp = () => {
    return (
        <Modal
            open={true}
            onClose={() => { }}
        >
            <div className={'mitrofanova_popup'}>
                <div></div>
                <div className={'mitrofanova_popup_content'}>
                    <h1> Add Category</h1>                   
                    <Button variant="text">Close</Button>           
                                      
                </div>
                <div className={'mitrofanova_popup_content_in'}>
                    <TextField id="outlined-basic1" label="Outlined" variant="outlined" />
                    <TextField id="outlined-basic2" label="Outlined" variant="outlined" />
                    <Button variant="outlined">Outlined</Button>
                </div>
            </div>
          </Modal>
            )
            }
export default MitrofanovaPopUp;

/*<div>

</div>*/