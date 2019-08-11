import React from 'react';
import Button from './Button';
import { FMessage } from '../hoc/IntlComponents';

const Form = ({ children, onClose, onSave, isEditable, title, disabled, classNames }) => (
  <div className={`form ${classNames}`}>
    <div className="title">
      <FMessage id={title} />
      {onClose && <Button fontIcon="&#10005;" title="form.btn.close" onClick={onClose} classNames="close" />}
    </div>
    <div className="content">{children}</div>
    {isEditable && (
      <div className="footer">
        <Button title="form.btn.save" onClick={onSave} classNames="save" disabled={disabled} />
      </div>
    )}
  </div>
);

export default Form;
