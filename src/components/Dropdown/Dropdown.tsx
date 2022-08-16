import React, { useEffect, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Dropdown.scss';

interface Props {
  options: string[];
  defaultOption: string;
  fieldName: string;
}

const Dropdown: React.FC<Props> = ({ options, defaultOption, fieldName }) => {
  const { selectDropdownOption } = useActions();
  const [isOpen, selectIsOpen] = useState(false);
  const selectedOption = useTypedSelector((state) => state.dropdown[fieldName]);

  useEffect(() => {
    if (defaultOption) selectDropdownOption(fieldName, defaultOption);
  }, [defaultOption]);

  const handleSelect = (option: string): void => {
    selectDropdownOption(fieldName, option);
    selectIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        <label className="dropdown__label">
          {fieldName[0].toUpperCase() + fieldName.slice(1)}
        </label>
        <button
          className="dropdown__selected"
          onClick={() => selectIsOpen(!isOpen)}
          type="button"
        >
          {selectedOption}
          <i className="dropdown__icon" />
        </button>
      </div>
      <ul
        className={`dropdown__select ${isOpen ? 'dropdown__select_open' : ''}`}
      >
        {
          options.map((option) => (
            <li
              className="dropdown__option"
              key={option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Dropdown;
