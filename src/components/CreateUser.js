
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function CreateUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        axios.post('http://localhost:80/react-crud-api/user/save', inputs).then(function (response) {
            console.log(response.data);
            
            navigate('/')
        })
    }



    return (
        <>
            <h1>Create Users</h1>
            <form onSubmit={handleSubmit}>

                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th><label htmlFor="name">name</label></th>
                            <td><input type="text" name="name" id="name" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="email">email</label></th>
                            <td><input type="email" name="email" id="email" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="mobile" >mobile</label></th>
                            <td><input type="number" name="mobile" id="mobile" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="right"><button>Save</button></td>
                        </tr>
                    </tbody>

                </table>
            </form>
        </>

    )
}

export default CreateUser;