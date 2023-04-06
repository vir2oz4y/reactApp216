import { Modal } from '@mui/material';
import React from 'react';
import react from 'react';
import './ProkhorovPopup.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const ProkhorovPopup = () => {
    return (
        <Modal
            open={true}
            onClose={() => { }}
            
        >
            <div className={'prokhorov_popup'}>
                <div className={'prokhorov_popup__content'}>
                    <div className={'big__box'}>
                        <div className={'box'}>
                            <div className={'text'}> Memento Mori</div>
                            <TextField id="standard-basic" label="vashi_pozhelaniya" variant="standard" />
                            <Button variant="outlined">NE NADO DYADYA</Button>
                        </div>
                        <div>foto
                        </div>
                    </div>
                </div>
                
            </div>
            </Modal>)

            }

export default ProkhorovPopup;