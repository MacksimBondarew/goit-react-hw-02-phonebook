const NameList = ({ contacts, deleteName }) => {
    return (
        <ul>
            {contacts.map(({ id, name }) => (
                <li key={id}>
                    <p>{name}</p>
                    <button
                        type="button"
                        onClick={() => deleteName(id)}
                    >Видалити</button>
                </li>
            ))}
        </ul>
    );
};

export default NameList;
