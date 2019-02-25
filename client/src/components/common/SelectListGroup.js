import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({
    name,
    error,
    info,
    onChange,
    options
}) => {
    const selectOptions = options.map(option => (
        <option
            key={option.label}
            value={option.value}
        >
            {option.label}
        </option>
    ));

    return (
        <div className="form-group">
            <select
                className={classnames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                name={name}
                onChange={onChange}>
                {selectOptions}
            </select>
            <small className="form-text text-muted">{info}</small>
            <div className="invalid-feedback">{error}</div>
        </div>
    )
}

SelectListGroup.propTypes = {
    error: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default SelectListGroup;