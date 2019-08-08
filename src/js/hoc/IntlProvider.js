import { IntlProvider, addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';

addLocaleData([...locale_en, ...locale_ru]);

const mapStateToProps = ({ intl: { key, defaultLocale, messages, locale, textComponent } }) => ({
  defaultLocale,
  messages: messages[locale],
  locale,
  textComponent,
  key,
});

export default connect(mapStateToProps)(IntlProvider);
