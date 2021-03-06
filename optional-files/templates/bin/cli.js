#!/usr/bin/env node
'use strict';

const pkg = require('../package.json');
const prog = require('caporal');
const Commands = require('../commands');
const updateNotifier = require('update-notifier');

updateNotifier({
    pkg: pkg
}).notify();

prog
    .version(pkg.version)
    .description(pkg.description);

Commands.attach(prog);

prog.parse(process.argv);
