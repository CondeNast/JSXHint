/**
 * JSXHint
 *
 * Copyright 2013-2014 (c) Condé Nast
 *
 * Please see LICENSE for details
 *
 */
'use strict';

var jsxtrans = require('./jsx-transform');
var mutiny = require('mutiny');

module.exports = function(root, files, tmpDir, cb){
  mutiny(
    {
      outdir: tmpDir,
      transform: [jsxtrans]
    },
    {
      root: root,
      fileFilter: function(f){
        if(files === null || files.indexOf(f) > -1){
          return true;
        } else {
          return false;
        }
      }
    }
  )
  .on('error', cb)
  .on('end', cb);
};
