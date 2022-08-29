import React, { useEffect, useRef, useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Dropdown.scss';

interface Props {
  options: {
    name: string,
    value: string,
  }[];
  defaultOption?: {
    name: string,
    value: string,
  } | null;
  title: string;
}

const Dropdown: React.FC<Props> = ({
  title,
  options,
  defaultOption = options[0],
}) => {
  const stateTitle = title[0].toLowerCase() + title.slice(1);
  const { selectDropdownOption } = useActions();
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useTypedSelector((state) => state.dropdown[stateTitle]);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (defaultOption) selectDropdownOption(stateTitle, defaultOption);
  }, []);

  const handleSelect = (option: { name: string, value: string}): void => {
    selectDropdownOption(stateTitle, option);
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
          {title}:
        </label>
        <button
          className="dropdown__selected"
          onClick={() => setIsOpen(!isOpen)}
          ref={dropdownButtonRef}
          type="button"
        >
          {selectedOption && selectedOption.name}
          <i className="dropdown__icon" />
        </button>
      </div>
      <ul
        className={`dropdown__select ${isOpen ? 'dropdown__select_open' : ''}`}
      >
        {
          options.map((option) => (
            <button
              className="dropdown__option"
              key={option.name}
              onClick={() => handleSelect(option)}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              type="button"
            >
              {option.name}
            </button>
          ))
        }
      </ul>
    </div>
  );
};

export default Dropdown;
