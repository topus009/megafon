import React from 'react';
import { injectIntl } from 'react-intl';
import { STATIC_PATH } from '../config/constants';
import { iFMessage, FMessage } from '../hoc/IntlComponents';

const Button = ({ disabled, onClick, classNames, icon, fontIcon, title, intl, role = 'button' }) => {
  const handleClick = () => !disabled && onClick();
  const renderBtnContent = () => {
    if (icon) {
      return (
        <img
          className="button_content"
          src={`../../${STATIC_PATH}/images/${icon}`}
          alt={iFMessage({ intl, id: title })}
        />
      );
    }
    if (fontIcon) {
      return (
        <div title={iFMessage({ intl, id: title })} className="button_content">
          {fontIcon}
        </div>
      );
    }
    return (
      <div className="button_content">
        <FMessage id={title} />
      </div>
    );
  };
  const disableClass = disabled ? ' disabled' : '';
  return (
    <div className={`button ${classNames}${disableClass}`} onClick={handleClick} role={role}>
      {renderBtnContent()}
    </div>
  );
};

export default injectIntl(Button);
