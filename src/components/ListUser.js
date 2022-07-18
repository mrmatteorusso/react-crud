import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function ListUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost:80/react-crud-api/users')
            .then(function (response) {
                console.log(response);
                setUsers(response.data);
            })

    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/react-crud-api/user/${id}/delete`).then(function (response) {
            console.log(response.data);
            getUsers();
        })
    }

    return (
        <>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>mobile</th>
                        <th>email</th>
                        <th>created on</th>

                    </tr>
                </thead>

                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td>{user.created_at}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>

                    )}
                </tbody>
            </table>
        </>
    )
}

export default ListUser;