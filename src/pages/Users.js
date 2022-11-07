import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users() {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getData = async () => {
            try {
                const books = await axios.get('http://localhost:8081/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(books.data.data);
            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, []);

    console.log(data);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
                <div>
                    <Link to="/" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light">Access Token</button>
                    </Link>
                    <Link to="/books" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light ms-3">Books</button>
                    </Link>
                    <Link to="/users" class="fs-3 text-white dropshadow text-decoration">
                        <button type="button" class="btn btn-outline-light ms-3">Users</button>
                    </Link>

                </div>

                <table>
                    <thead>
                        <tr>
                            <th className='text-white'>ID</th>
                            <th className='text-white'>Username</th>
                            <th className='text-white'>FirstName</th>
                            <th className='text-white'>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? (
                                data.map((user) => (
                                    <tr key={user.id}>
                                        <th scope="row" className='text-white fs-5'>{user.id}</th>
                                        <td className='text-white'>{user.username}</td>
                                        <td className='text-white'>{user.firstName}</td>
                                        <td className='text-white'>{user.lastName}</td>
                                    </tr>
                                ))) : (
                                <tr>
                                    <th scope="row" className='text-white fs-5'>ACCESS_TOKEN Error</th>
                                    <td className='text-white'>ACCESS_TOKEN Error</td>
                                    <td className='text-white'>ACCESS_TOKEN Error</td>
                                    <td className='text-white'>ACCESS_TOKEN Error</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </header>
        </div>
    );
}

export default Users;