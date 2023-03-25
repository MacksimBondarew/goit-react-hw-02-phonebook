import { Component } from 'react';
import { nanoid } from 'nanoid';
import NameEditor from './NameEditor';
import NameList from './NameList';
import FilterName from './FilterName';
import { PhoneBook, TitleContacts, MainTitlePhoneBook } from './App.styled';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
            { id: 'id-5', name: 'Volodymyr Zelenskyi', number: '234-89-53' },
            { id: 'id-6', name: 'Mentor Alona', number: '321-23-76' },
        ],
        filter: '',
    };

    addName = (name, number) => {
        const contact = {
            id: nanoid(),
            name,
            number,
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };

    getVisibleName = () => {
        const { filter, contacts } = this.state;
        const normalizedName = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedName)
        );
    };

    deleteName = nameId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(name => name.id !== nameId),
        }));
    };
    changeFilter = e => {
        this.setState({ filter: e.target.value });
    };

    render() {
        const { filter, contacts } = this.state;

        return (
            <PhoneBook>
                <MainTitlePhoneBook>Phonebook</MainTitlePhoneBook>
                <NameEditor onSubmit={this.addName} people={contacts} />

                <TitleContacts>Contacts</TitleContacts>
                <FilterName value={filter} onChange={this.changeFilter} />
                <NameList
                    contacts={this.getVisibleName()}
                    deleteName={this.deleteName}
                />
            </PhoneBook>
        );
    }
}

export default App;
