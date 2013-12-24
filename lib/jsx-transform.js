/**
 * JSXHint
 *
 * Copyright 2013-2014 (c) Condé Nast
 *
 * Please see LICENSE for details
 *
 */
'use strict';

var through = require('through2');
var react = require('react-tools');
var docblock = require('react-tools/vendor/fbtransform/lib/docblock');

module.exports = function(file){
  var data = '';

  function onData(chunk, enc, cb){
    data += chunk;
    cb();
  }

  function onEnd(cb){
    /* jshint validthis: true */
    var hasDocblock = docblock.parseAsObject(docblock.extract(data)).jsx;
    var hasExtension = /\.jsx$/.exec(file);
    var jsData;

    if (hasExtension && !hasDocblock) {
      data = '/** @jsx React.DOM */' + data;
    }

    if (hasExtension || hasDocblock) {
      jsData = react.transform(data);
    } else {
      jsData = data;
    }

    this.push(jsData);
    cb();
  }

  return through(onData, onEnd);
};


