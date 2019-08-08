import React, { useState } from 'react';

const Dropdown = ({ dropdownItems, selectedItem = 0, classNames, cb }) => {
  const [items, setItems] = useState(dropdownItems);
  const [selected, setSelected] = useState(items[selectedItem]);
  const [shown, setShown] = useState(false);
  const handleSelect = item => {
    setSelected(item);
    setShown(!shown);
    cb?.(item.value);
  };
  const handleClick = item => handleSelect(item);
  const handleKeyUp = (e, item) => {
    if (e.keyCode === 13) {
      handleSelect(item);
    }
  };
  return (
    <div className={`dropdown ${classNames}`}>
      <button role="menu" className="dropdown_title" onClick={() => setShown(!shown)}>
        {selected.label}
      </button>
      {shown && (
        <ul className="dropdown_menu" role="menu">
          {dropdownItems
            .filter(item => item.value !== selected.value)
            .map(item => (
              <li
                className="dropdown_menu_item"
                role="menuitem"
                key={item.value}
                onClick={() => handleClick(item)}
                onKeyUp={e => handleKeyUp(e, item)}
              >
                {item.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
