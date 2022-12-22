import Form from "./Components/contacto"
import {useState} from "react";
import axios from "axios";

const Contact = () =>{
    const[user, setUser] = useState ({nombre: "", mail: "", telefono: "",  mensaje: ""})
    const[sucess, setSucess]= useState(false)
    const[error, setError]= useState(false)

    const handleChange = (event) =>{
        setSucess(false)
        setError(false)
        const prop = event.target.name
        const value = event.target.value
        setUser({...user, [prop]: value}) //spread operator
    }
    const handleSubmit = (event)=>{
         event.preventDefault()
    axios({
        url: "http://127.0.0.1:8000/api/insertarCliente",
        method: "POST",
        data: user
    }).then((response)=>{
        console.log(response);
        setUser({nombre: "", mail: "", telefono: "", mensaje: ""});
        setSucess (true)
    }).catch((response)=>{
        setError(true)

    })
}
    return(
        <Form user={user} handleChange={handleChange} handleSubmit={handleSubmit} sucess={sucess} error={error}/>
    )
}


export default Contact;