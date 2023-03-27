import {
    ContactItem,
    ContactNameSpan,
    ContactNumberSpan,
    RemoveContact,
} from '../NameList/NameList.styled';
import PropTypes from 'prop-types';

const ContactName = ({ id, name, number, deleteName }) => {
    return (
        <ContactItem key={id}>
            <ContactNameSpan>{name}</ContactNameSpan>
            <ContactNumberSpan>{number}</ContactNumberSpan>
            <RemoveContact type="button" onClick={() => deleteName(id)}>
                Видалити
            </RemoveContact>
        </ContactItem>
    );
};
ContactName.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactName;
