import React from 'react';
import { STATIC_PATH } from '../config/constants';

const Button = ({ disabled, onClick, classNames, icon, fontIcon, title }) => {
  const handleClick = () => !disabled && onClick();
  const renderBtnContent = () => {
    if (icon) {
      return <img className="button_content" src={`../../${STATIC_PATH}/images/${icon}`} alt={title} />;
    }
    if (fontIcon) {
      return (
        <div title={title} className="button_content">
          {fontIcon}
        </div>
      );
    }
    return <div className="button_content">{title}</div>;
  };
  const disableClass = disabled ? ' disabled' : '';
  return (
    <div className={`button ${classNames}${disableClass}`} onClick={handleClick} role="button">
      {renderBtnContent()}
    </div>
  );
};

export default Button;
