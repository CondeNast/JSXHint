#!/usr/bin/env node
/**
 * JSXHint CLI tool
 *
 * Copyright 2013 (c) Condé Nast
 *
 * Please see LICENSE for details
 *
 */

'use strict';

var jsxhint = require('./jsxhint');
var pkgInfo = require('./package');
var runnel = require('runnel');
var ArgParse = require('argparse').ArgumentParser;

var globs = [];
var args = {};

var parser = new ArgParse({
  version: pkgInfo.version,
  addHelp: true,
  description: pkgInfo.description,
  debug: true

});

parser.addArgument(
  ['-f', '--ignore-file'],
  {
    help: 'Use ignore file. Default: .gitignore',
    defaultValue: '.gitignore',
    dest: 'ignoreFile'
  }
);

parser.addArgument(
  ['-i', '--ignore'],
  {
    help: "Ignore pattern. Globs MUST be wrapped in quotes!",
    defaultValue: '',
    nargs: '+',
    dest: 'ignoreList'
  }
);

parser.addArgument(
  ['-r', '--jshintrc'],
  {
    help: 'Use jshintrc. Default: .jshintrc',
    defaultValue: '.jshintrc',
    dest: 'jshintrc'
  }
);

parser.addArgument(
  ['-g', '--glob'],
  {
    help: 'Specify file pattern to hint. Globs MUST be wrapped in quotes!',
    defaultValue: [],
    action: 'append',
    type: 'string',
    dest: 'globs'
  }
);

// this oddly wraps the arguments in an extra array...
parser.addArgument(
  ['files'],
  {
    help: 'List of files to hint',
    nargs: '+',
    action: 'append'
  }
);

try {
  args = parser.parseArgs();
} catch (e){
  console.log(e.message.replace(/cli\.js/, 'jsxhint'));
  process.exit(1);
}

globs = args.globs.concat(args.files[0]);
var prjRoot = process.cwd();
var tasks = jsxhint.generateTasks(globs, args.ignoreList, args.ignoreFile, args.jshintrc, prjRoot);
runnel(tasks);