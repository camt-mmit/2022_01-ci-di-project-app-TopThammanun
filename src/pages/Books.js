import logo from '../logo.svg';
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Books() {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const getData = async () => {
            try {
                const books = await axios.get('http://localhost:8082/books', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(books.data);
            } catch (e) {
                console.error(e);
            }
        };
        getData();
    }, []);

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
                            <th className='text-white fs-5'>ID</th>
                            <th className='text-white fs-5'>Username</th>
                            <th className='text-white fs-5'>FirstName</th>
                            <th className='text-white fs-5'>LastName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? (
                                data.map((book) => (
                                    <tr key={book.id}>
                                        <th scope="row" className='text-white fs-5'>{book.isbn}</th>
                                        <td className='text-white'>{book.title}</td>
                                        <td className='text-white'>{book.author}</td>
                                        <td className='text-white'>{book.price}</td>
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

export default Books;