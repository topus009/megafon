import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';
import { messages, defaultLocale } from '../config/translation';

addLocaleData([...locale_en, ...locale_ru]);

const WithIntlProviderHOC = ({ children, language, ...props }) => {
  return (
    <IntlProvider
      {...props}
      messages={messages[language]}
      locale={language || defaultLocale}
      key={language || defaultLocale}
    >
      {children}
    </IntlProvider>
  );
};

const mapStateToProps = ({ app: { language } }) => ({ language });

export default connect(mapStateToProps)(WithIntlProviderHOC);
