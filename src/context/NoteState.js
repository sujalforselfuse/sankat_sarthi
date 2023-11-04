import noteContext from './noteContext';
import { useState } from 'react';
import React from 'react';

const NoteState = (props) => {

    const [login, setLogin] = useState(false);
    const [name, setName] = useState('');
    
    const fetchData = async () => {
        try {

            if (!localStorage.getItem('token')) {
                return;
            }

            const response = await fetch(`http://localhost:8000/api/auth/userinfo`, {
                method: "GET",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')

                }
            });
            const json = await response.json();
            if (json.success) {
                setLogin(true);
                setName(json.user.name)
            }
            /* console.log(json.user.name); */
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <noteContext.Provider value={{ fetchData,login,name }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
