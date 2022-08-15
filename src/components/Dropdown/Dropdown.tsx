import React, { useEffect, useState } from 'react';

import './Dropdown.scss';

interface Props {
  options: string[];
  defaultOption: string;
}

const Dropdown: React.FC<Props> = ({ options, defaultOption }) => {
  const [selected, setSelected] = useState<string>('null');
  const [isOpen, selectIsOpen] = useState(false);

  useEffect(() => {
    setSelected(defaultOption);
  }, []);

  const handleSelect = (option: string): void => {
    setSelected(option);
    selectIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        <label className="dropdown__label">Season</label>
        <button
          className="dropdown__selected"
          onClick={() => selectIsOpen(!isOpen)}
          type="button"
        >
          {selected}
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
