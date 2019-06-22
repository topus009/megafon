import React from 'react';

const Button = ({ disabled, onClick, classNames, icon, fontIcon, title }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };
  let content = <div className="button_content">{title}</div>;
  const disableClass = disabled ? ' disabled' : '';
  if (fontIcon) {
    content = (
      <div title={title} className="button_content">
        {fontIcon}
      </div>
    );
  }
  if (icon) {
    content = <img className="button_content" src={`../assets/images/${icon}`} alt={title} />;
  }
  return (
    <div className={`button ${classNames}${disableClass}`} onClick={handleClick}>
      {content}
    </div>
  );
};

export default Button;
