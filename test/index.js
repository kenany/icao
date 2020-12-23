'use strict';

const isObject = require('lodash.isplainobject');
const test = require('tape');

const icao = require('../');

test('exports', (t) => {
  t.plan(1);
  t.ok(isObject(icao));
});
