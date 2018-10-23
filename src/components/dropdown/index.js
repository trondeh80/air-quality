import React from 'react';
import './dropdown.scss';

export default function Dropdown(props) {
  const {
    items,
    id,
    label,
    emptyValue,
    selectedValue,
    onChange,
    disabled
  } = props;

  const { defaultValue, defaultLabel } = emptyValue;
  return (
    <div className="dropdown-select">
      <label htmlFor={id}>{label || ''}</label>
      <select id={id} onChange={onChange} disabled={disabled || false} value={selectedValue}>
        <option value={defaultValue}>{defaultLabel}</option>
        {
          items && items.length
          && items.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>))
        }
      </select>
    </div>
  );
}
