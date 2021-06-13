import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = property => event => {
    this.setState({ [property]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.contacts.push({
      id: uuid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
    /*console.log(this.state)*/
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter />
        <ContactList friends={this.state.contacts} />
      </div>
    );
  }
}
