import React, { useEffect, useRef, useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useTypedSelector((state) => state.dropdown[fieldName]);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (defaultOption) selectDropdownOption(fieldName, defaultOption);
  }, [defaultOption]);

  const handleSelect = (option: string): void => {
    selectDropdownOption(fieldName, option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      event.target !== dropdownButtonRef.current?.children[0]
      && event.target !== dropdownButtonRef.current
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return (() => document.removeEventListener('click', handleClickOutside));
  }, [isOpen]);

  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        <label className="dropdown__label">
          {fieldName[0].toUpperCase() + fieldName.slice(1)}
        </label>
        <button
          className="dropdown__selected"
          onClick={() => setIsOpen(!isOpen)}
          ref={dropdownButtonRef}
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
