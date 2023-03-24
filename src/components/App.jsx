import { Component } from 'react';
// import { nanoid } from 'nanoid';
import NameEditor from './NameEditor';
import NameList from './NameList';
import shortid from 'shortid';

class App extends Component {
    state = {
        contacts: [],
        name: '',
    };

    addName = name => {
        const contact = {
            id: shortid.generate(),
            name,
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };

    getVisibleName = () => {
        const { name, contacts } = this.state;
        const normalizedName = name.toLowerCase();

        return contacts.map(contact =>
            contact.name.toLowerCase().includes(normalizedName)
        );
    };

    deleteName = nameId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(name => name.id !== nameId),
        }));
    };

    render() {
        const visibleName = this.getVisibleName();

        return (
            <>
                <NameEditor onSubmit={this.addName} />
                <NameList contacts={visibleName} deleteName={this.deleteName} />
            </>
        );
    }
}

export default App;
