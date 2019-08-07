import React from 'react';
import Button from './Button';

const Form = ({ children, onClose, onSave, isEditable, title, disabled }) => (
  <div className="form">
    <div className="title">
      {title}
      {onClose && <Button fontIcon="&#10005;" title="Закрыть" onClick={onClose} classNames="close" />}
    </div>
    <div className="content">{children}</div>
    {isEditable && (
      <div className="footer">
        <Button title="Сохранить" onClick={onSave} classNames="save" disabled={disabled} />
      </div>
    )}
  </div>
);

export default Form;
