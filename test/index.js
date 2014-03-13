var icao = require('../');
var isObject = require('lodash.isplainobject');
var test = require('tape');

test('exports', function(t) {
  t.plan(1);
  t.ok(isObject(icao));
});