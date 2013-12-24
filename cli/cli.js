#!/usr/bin/env node
/**
 * JSXHint cli wrapper.  Uses same args as JSHint, just passes them through
 * wholesale
 *
 * Copyright 2013-2014 (c) Condé Nast
 *
 * Please see LICENSE for details
 *
 */

'use strict';

var path = require('path');
var fs = require('fs');
var minimist = require('minimist');
var jsxtransform = require('../');

function usage(){
  var use = path.join(__dirname, 'usage.txt');
  fs.createReadStream(use).pipe(process.stdout);
  return;
}

var argv = minimist(process.argv.slice(2), {boolean: ['h', 'help']});

if (argv.h || argv.help) return usage;

var files = argv._.shift();

if(!files){
  files = null;
}

jsxtransform(files, argv._, function(err){
  if(err) return console.error(err);
  console.log('Done');
});