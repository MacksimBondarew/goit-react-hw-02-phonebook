import { FilterNameLabel, FilterImput } from './FilterName.styled';
import PropTypes from 'prop-types';

const FilterName = ({ value, onChange }) => {
    return (
        <FilterNameLabel>
            Фильтр по имени
            <FilterImput type="text" value={value} onChange={onChange} />
        </FilterNameLabel>
    );
};

FilterName.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterName;
