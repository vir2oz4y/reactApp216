import React from 'react';
import StudentElement from "../Components/StudentElement/StudentElement";
import {Stack} from "@mui/material";
import Header from "../Components/Header/Header";

const StudentsPage = () => {

    return (
        <div>
            <Header/>
            <Stack direction="row" spacing={2} padding={'1em'}>

                <StudentElement
                    fio={'Крючков Николай Алексеевич'}
                    description={'Middle fullstack developer'}
                    imageSrc={'https://sky.pro/media/wp-content/uploads/2022/03/glavnaya-9-1.png'}
                    navigateTo={'/teacher'}
                />

                <StudentElement
                    fio={'Повелитель тигровых ос'}
                    description={'закаленный на коде'}
                    imageSrc={'https://postila.ru/data/7e/bd/f2/ac/7ebdf2ac3f49aa924b990b19869a292db528397fed2d41d89356e6c92ec14425.jpg'}
                    navigateTo={'/prokhorov'}
                />
                
            </Stack>
        </div>

    );
};

export default StudentsPage;