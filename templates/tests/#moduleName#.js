'use strict';

const test = require('tape');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

const Module = require('../lib')[%{moduleName}%];

test('Module should be bootstraped OK', (t)=>{
    t.ok(Module());
    t.end();
});
