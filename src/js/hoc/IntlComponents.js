import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import dm from '../translations/en.json';

export const FHTMLMessage = ({ id, ...restProps }) => (
  <FormattedHTMLMessage {...restProps} id={id} tagName="span" defaultMessage={dm[id]} />
);

export const FMessage = ({ id, ...restProps }) => <FormattedMessage {...restProps} id={id} defaultMessage={dm[id]} />;

export const iFMessage = props => {
  if (dm[props.id]) {
    const params = [
      {
        id: props.id,
        defaultMessage: dm[props.id],
      },
    ];
    if (props.values) {
      params.push(props.values);
    }
    return props.intl.formatMessage(...params);
  }
  if (!PRODUCTION) {
    console.warn(`iFMessage => отсутствует перевод для ключа - ${props.id}`);
  }
  return props.defaultText ? props.defaultText : '';
};
