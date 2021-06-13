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
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.state.contacts.push({
      id: uuid(),
      name: this.state.name,
    });
    this.setState({ name: '' });
    /*console.log(this.state)*/
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
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
