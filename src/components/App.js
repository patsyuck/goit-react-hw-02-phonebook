import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import ContactForm from './ContactForm';
import { Form } from './Form';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    /*contacts: [],*/
    filter: '',
    name: '',
    number: '',
  };

  handleChange = property => event => {
    this.setState({ [property]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === this.state.name.toLowerCase(),
      )
    ) {
      alert(`${this.state.name} is already in contacts!`);
    } else {
      /* Push НЕ ВИКОРИСТОВУВАТИ!
      this.state.contacts.push({
        id: uuid(),
        name: this.state.name,
        number: this.state.number,
      });*/
      this.setState({
        contacts: this.state.contacts.concat([
          {
            id: uuid(),
            name: this.state.name,
            number: this.state.number,
          },
        ]),
      });
    }
    this.setState({ name: '', number: '' });
  };

  handlerSubmit = contact => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is already in contacts!`);
    } else {
      this.setState({
        contacts: this.state.contacts.concat([contact]),
      });
    }
  };

  /*handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === event.target[0].value.toLowerCase(),
      )
    ) {
      alert(`${event.target[0].value} is already in contacts!`);
    } else {
      this.setState(prevState => ({
        contacts: prevState.contacts.push({
          id: uuid(),
          name: event.target[0].value,
          number: event.target[1].value,
        })
      }));
      console.log(this.state)
    }
    event.target.reset()
  };*/

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
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
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ContactList
          friends={this.state.contacts}
          filter={this.state.filter}
          onClick={this.handleDelete}
        />
      </div>
    );
  }
}
