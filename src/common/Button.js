import React from 'react';

const Button = ({
    icon, fontIcon, title, onClick, classNames, disabled
}) => {
    let content = <div className='button_content'>{title}</div>;
    const disableClass = disabled ? ' disabled' : '';
    if(fontIcon) {
        content =
            <div
                title={title}
                className='button_content'
            >
                {fontIcon}
            </div>;
    }
    if(icon) {
        content =
            <img
                className='button_content'
                src={'../images/' + icon}
                alt={title}
            />;
    }
    return (
        <div
            className={'button ' + classNames + disableClass}
            onClick={() => disabled ? false : onClick()}
        >
            {content}
        </div>
    );
};

export default Button;

