import React from 'react';
import _ from 'lodash';
import { mount, render } from 'enzyme';
import InfoField from '../../src/common/InfoField';

const testProps = {
  child: [undefined, <div className="child">child</div>],
  value: ['value', 'value'],
  label: ['label'],
  hideWrapper: [true, undefined],
};

test('InfoField render correctly', () => {
  const { child, value, label, hideWrapper } = testProps;
  _.each([0, 1], key => {
    const component = (
      <InfoField value={value[key]} label={label[key]} hideWrapper={hideWrapper[key]}>
        {child[key]}
      </InfoField>
    );
    const renderWrapper = render(component);
    const mountWrapper = mount(component);
    const valueText = _.get(renderWrapper.find('.value'), '[0].children.[0].data');
    const labelText = _.get(renderWrapper.find('.label'), '[0].children.[0].data');
    const wrapperNodeClassName = renderWrapper[0].attribs.class;
    const childNode = mountWrapper.find('.child');
    if (key === 0) {
      expect(valueText).toBe(value[key]);
      expect(labelText).toBe(label[key]);
      expect(wrapperNodeClassName.indexOf('hide_wrapper') > -1).toBe(true);
      expect(childNode.exists()).toBe(false);
    }
    if (key === 1) {
      expect(valueText).not.toBe(value[key]);
      expect(wrapperNodeClassName.indexOf('hide_wrapper') > -1).toBe(false);
      expect(childNode.exists()).toBe(true);
    }
  });
});
