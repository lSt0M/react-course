import {VscGlobe} from 'react-icons/vsc'

export const Posts = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(Response => Response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }}>
        <VscGlobe/>
        Traer Datos
    </button>
}
