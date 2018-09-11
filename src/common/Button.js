import React from 'react';

const Button = ({icon, fontIcon, title, onClick, classNames}) => {
    let content = <div className='button_content'>{title}</div>;
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
            className={'button ' + classNames}
            onClick={onClick}
        >
            {content}
        </div>
    );
};

export default Button;

