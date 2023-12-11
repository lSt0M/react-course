import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
/* import { Greeting, UserCard } from './Greeting';
import Product, { Navbar } from './Product';
import { Button } from './Button'
import { TaskCard } from './Task'
import { Saludar } from './Saludar'
import { Posts } from './Posts'
import { func } from 'prop-types'; */

const root = ReactDOM.createRoot(document.getElementById('root'));

function Counter() {

    const [mensaje, setMensaje] = useState('');
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("render")
    }, [counter])

    return (
        <div>
            <input onChange={e => setMensaje(e.target.value)} />
            <button onClick={() => { alert('el mensaje es:' + mensaje) }}>
                Save
            </button>

            <hr />

            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Incrementar
            </button>

            <button onClick={() => setCounter(counter - 1)}>
                Restar
            </button>
        </div>
    )
}

const users = [
    {
        id: 1,
        name: 'Eythan',
        edad: '22 años',
        image: 'https://robohash.org/user5'
    },
    {
        id: 2,
        name: 'johanna',
        edad: '21 años',
        image: 'https://robohash.org/user21'
    },
    {
        id: 3,
        name: 'leandro',
        edad: '23 años',
        image: 'https://robohash.org/user23'
    },
    {
        id: 4,
        name: 'carlos',
        edad: '21 años',
        image: 'https://robohash.org/user40'
    }
] 

root.render(
    <>
        <Counter />
        {users.map((user, i) => {
            return (
                <div key={i}>
                    <h1>{user.name}</h1>
                    <h1>{user.edad}</h1>
                    <img src={user.image}/>
                </div>
            );
        })} 
    </>
);
