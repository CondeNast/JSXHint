/**
 * JSXHint
 *
 * Copyright 2013-2014 (c) Condé Nast
 *
 * Please see LICENSE for details
 *
 */
'use strict';

var path = require('path');

var tmp = require('tmp');
var runnel = require('runnel');
var rimraf = require('rimraf');
var jshint = require('jshint/src/cli');

var runTransform = require('./lib/jsify');

function runLinter(opts, tmpDir, cb){
  opts.push(tmpDir);
  jshint.interpret(opts, cb);
}

module.export = function(files, hintArgs, cb){
  tmp.dir(function(err, tmpDir){
    if(err){
      return cb(err);
    }

    hintArgs = hintArgs || [];
    var runDir = process.cwd();

    var tasks = [
      runTransform.bind(null, runDir, files, tmpDir),
      runLinter.bind(null, hintArgs, tmpDir),
      rimraf.bind(null, tmpDir),
      cb
    ];

    runnel(tasks);
  });
};
