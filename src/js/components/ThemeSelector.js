import React from 'react';
import { connect } from 'react-redux';
import Dropdown from '../common/Dropdown';
import { defaultThemes } from '../config/theme';
import { setTheme } from '../actions/ThemeActions';
import { FMessage } from '../hoc/IntlComponents';

const LanguageSelector = ({ currentTheme, setTheme, locale }) => {
  const itemIndex = defaultThemes.findIndex(({ value }) => value === currentTheme);
  const renderItems = () =>
    defaultThemes.map(({ value, label }) => ({
      label: (
        <div className="dropdown_label" key={value}>
          <div>
            <FMessage id={label} />
          </div>
          <div className={`preview ${label}`} />
        </div>
      ),
      value,
    }));
  return (
    <Dropdown
      key={locale}
      dropdownItems={renderItems()}
      selectedItem={itemIndex}
      classNames="themeSelector"
      cb={setTheme}
    />
  );
};

const mapStateToProps = ({ theme, intl }) => {
  const { currentTheme } = theme;
  const { locale } = intl;
  return {
    currentTheme,
    locale,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTheme: value => dispatch(setTheme(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelector);
