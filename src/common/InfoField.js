import React from 'react';

const InfoField = ({children, value, label, hideWrapper}) =>
    <div className={`info_field ${hideWrapper ? 'hide_wrapper' : ''}`}>
        <div className='label'>{label}</div>
        <div className='value'>{children || value}</div>
    </div>;

export default InfoField;
