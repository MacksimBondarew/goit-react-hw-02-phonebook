import PropTypes from 'prop-types';
import { ContactsList } from './NameList.styled';
import ContactName from '../ContactName/ContactName';

const NameList = ({ contacts, deleteName }) => {
    return (
        <ContactsList>
            {contacts.map(({ id, name, number }) => (
                <ContactName
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    deleteName={deleteName}
                />
            ))}
        </ContactsList>
    );
};

NameList.propTypes = {
    deleteName: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default NameList;
