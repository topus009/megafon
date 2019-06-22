import React from 'react';
import whyDidYouUpdate from 'why-did-you-update';
// import '../helpers/perf';

whyDidYouUpdate(React, {
  exclude: [/^Connect/],
  groupByComponent: true,
});
