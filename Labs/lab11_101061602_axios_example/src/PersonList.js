import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(err => {
                console.error("Error fetching data:", err);
            });
    }

    render() {
        return (
            <div className="container mt-5">
                <h2 className="text-center text-white bg-success py-2">User List</h2>
                <div className="row">
                    {this.state.persons.map((person, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card shadow-lg">
                                <div className="card-header bg-info text-white">
                                    <h5>{person.name.title} {person.name.first} {person.name.last}</h5>
                                    <p>User Name: {person.login.username}</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img
                                                src={person.picture.large}
                                                alt={`${person.name.first} ${person.name.last}`}
                                                className="img-fluid rounded-circle"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                                            <p><strong>Time Zone:</strong> {person.location.timezone.description}</p>
                                            <p><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country}</p>
                                            <p><strong>Birth Date and Age:</strong> {person.dob.date.substring(0, 10)} ({person.dob.age})</p>
                                            <p><strong>Register Date:</strong> {person.registered.date.substring(0, 10)}</p>
                                            <p><strong>Phone:</strong> {person.phone}</p>
                                            <p><strong>Cell:</strong> {person.cell}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PersonList;
