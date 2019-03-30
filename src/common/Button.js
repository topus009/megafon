import React from 'react';

class Button extends React.PureComponent {
    handleClick = () => {
        const {
            disabled,
            onClick
        } = this.props;
        if(!disabled) {
            onClick();
        }
    }
    render() {
        const {
            icon,
            fontIcon,
            title,
            classNames,
            disabled
        } = this.props;
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
                    src={'../assets/images/' + icon}
                    alt={title}
                />;
        }
        return (
            <div
                className={'button ' + classNames + disableClass}
                onClick={this.handleClick}
            >
                {content}
            </div>
        );
    }
}

export default Button;
