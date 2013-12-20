[![build status](https://secure.travis-ci.org/CondeNast/JSXHint.png)](http://travis-ci.org/CondeNast/JSXHint)

#JSXHint
A wrapper around JSHint to allow linting of files containg JSX syntax

Accepts glob patterns. Respects your local .jshintrc file and .gitignore to filter your glob patterns.

##Installation
`npm install -g jsxhint`

##Usage
```
usage: jsxhint [-h] [-v] [-f IGNOREFILE] [-i IGNORELIST [IGNORELIST ...]]
               [-r JSHINTRC] [-g GLOBS]
               files [files ...]

Wrapper for JSHint to allow hinting of JSX files

Positional arguments:
  files                 List of files to hint

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -f IGNOREFILE, --ignore-file IGNOREFILE
                        Use ignore file. Default: .gitignore
  -i IGNORELIST [IGNORELIST ...], --ignore IGNORELIST [IGNORELIST ...]
                        Ignore pattern. Globs MUST be wrapped in quotes!
  -r JSHINTRC, --jshintrc JSHINTRC
                        Use jshintrc. Default: .jshintrc
  -g GLOBS, --glob GLOBS
                        Specify file pattern to hint. Globs MUST be wrapped
                        in quotes!
```

##Public API
<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="generateTasks"><span class="type-signature"></span>generateTasks<span class="signature">(globList, ingoreList, ignoreFile, hintFile, <span class="optional">prjRoot</span>)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Generate an array of tasks for passing into <code>runnel</code></p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Argument</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>globList</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>List of file patterns to lint</p></td>
</tr>
<tr>
<td class="name"><code>ingoreList</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>List of file patterns to ignore</p></td>
</tr>
<tr>
<td class="name"><code>ignoreFile</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>File name to generate ignore patterns from</p></td>
</tr>
<tr>
<td class="name"><code>hintFile</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="attributes">
</td>
<td class="description last"><p>File name to retrieve jshint options from</p></td>
</tr>
<tr>
<td class="name"><code>prjRoot</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="attributes">
&lt;optional><br>
</td>
<td class="description last"><p>Specify the project root for finding files</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/CondeNast/JSXHint/blob/docs/jsxhint.js">jsxhint.js</a>
<span>, </span>
<a href="https://github.com/CondeNast/JSXHint/blob/docs/jsxhint.js#L329">lineno 329</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Array of bound functions to pass to <code>runnel</code></p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="lintJSX"><span class="type-signature"></span>lintJSX<span class="signature">(glb, ignoreList, ignoreFile, hintFile, cb)</span><span class="type-signature"> &rarr; {Object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Generate the ignores, the hint options, transform the files
and then hint them</p>
<p>calling cb() directly immediately aborts execution.
calling done() aborts execution for a particular glob set
we need to
1. get ignores, if failure, die
2. get jshinrc, if failure, die
3. run process globs
a. for each glob
1. filter
2. transform
3. lint</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>glb</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>File patterns to lint</p></td>
</tr>
<tr>
<td class="name"><code>ignoreList</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>File patterns to ignore</p></td>
</tr>
<tr>
<td class="name"><code>ignoreFile</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>File ot generate ignore patterns from</p></td>
</tr>
<tr>
<td class="name"><code>hintFile</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>File to generate hint options from</p></td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p><code>Runnel</code> provided callback</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/CondeNast/JSXHint/blob/docs/jsxhint.js">jsxhint.js</a>
<span>, </span>
<a href="https://github.com/CondeNast/JSXHint/blob/docs/jsxhint.js#L178">lineno 178</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>Undefined</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Object</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
<!-- END docme generated API please keep comment here to allow auto update -->