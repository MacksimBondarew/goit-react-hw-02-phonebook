import PropTypes from 'prop-types';
import {
    ContactsList,
    ContactItem,
    ContactNameSpan,
    ContactNumberSpan,
    RemoveContact,
} from './NameList.styled';

const NameList = ({ contacts, deleteName }) => {
    return (
        <ContactsList>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}>
                    <ContactNameSpan>{name}</ContactNameSpan>
                    <ContactNumberSpan>{number}</ContactNumberSpan>
                    <RemoveContact type="button" onClick={() => deleteName(id)}>
                        Видалити
                    </RemoveContact>
                </ContactItem>
            ))}
        </ContactsList>
    );
};

NameList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteName: PropTypes.func.isRequired,
};

export default NameList;
