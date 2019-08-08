import React from 'react';
import { connect } from 'react-redux';
import Dropdown from '../common/Dropdown';
import { defaultLanguages } from '../config/translation';
import { STATIC_PATH } from '../config/constants';
import { setLanguage } from '../actions/IntlActions';

const LanguageSelector = ({ locale, setLanguage }) => {
  const itemIndex = defaultLanguages.findIndex(({ value }) => value === locale);
  const renderItems = () =>
    defaultLanguages.map(({ value, label }) => ({
      label: (
        <div className="dropdown_label" key={value}>
          <div>{label}</div>
          <img src={`../../${STATIC_PATH}/images/flags/${value}.svg`} alt={label} />
        </div>
      ),
      value,
    }));
  return (
    <Dropdown dropdownItems={renderItems()} selectedItem={itemIndex} classNames="languageSelector" cb={setLanguage} />
  );
};

const mapStateToProps = ({ intl }) => {
  const { locale } = intl;
  return {
    locale,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: value => dispatch(setLanguage(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector);
