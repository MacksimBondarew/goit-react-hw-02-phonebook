import { Component } from 'react';

class NameEditor extends Component {
    state = {
        name: '',
    };

    handleChange = e => {
        this.setState({ name: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name);

        this.setState({ name: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value = {this.state.name}
                    onChange = {this.handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button type='submit'>
                    add Contact
                </button>
            </form>
        );
    }
}
export default NameEditor;
