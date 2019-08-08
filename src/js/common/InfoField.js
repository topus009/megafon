import React from 'react';
import { FMessage } from '../hoc/IntlComponents';

const InfoField = ({ children, value, label, hideWrapper }) => (
  <div className={`info_field ${hideWrapper ? 'hide_wrapper' : ''}`}>
    <div className="label">
      <FMessage id={`infoField.${label}`} />
    </div>
    <div className="value">{children || value}</div>
  </div>
);

export default InfoField;
