'use strict';

var fs = require('fs');
var gulp = require('gulp');
var zip = require('gulp-zip');
var yaml = require('js-yaml');
var Handlebars = require('handlebars');

var template = Handlebars.compile(fs.readFileSync('src/LMUIViewJS.hbs', 'utf8'));
var docTpl = Handlebars.compile(fs.readFileSync('src/doc.hbs', 'utf8'));
var readme = fs.readFileSync('README.md', 'utf8');

var templates = yaml.safeLoad(fs.readFileSync('src/template.yaml', 'utf8'));

var processTpl = function(tpl) {
  tpl = JSON.stringify(tpl);
  return tpl.replace(/\\n/g, '&#10;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

var data = [];

for (var k in templates) {
  if (templates.hasOwnProperty(k)) {
    var t = templates[k];
    var tpl = t.tpl.next || t.tpl;
    tpl = tpl.replace(/: function/g, '');

    var snippet = {
      name: k,
      description: t.description || t.tpl,
      tpl: processTpl(tpl),
      variables: t.variables || [],
      tplRaw: tpl
    };

    data.push(snippet);
  }
}

fs.writeFileSync('jetbrains/templates/LMUIViewJS.xml', template(data));
fs.writeFileSync('README.md', readme.replace(
  /(<!--DOC_START-->)[\s\S]*(<!--DOC_END-->)/g,
  function(match, $1, $2) {
    return $1 + '\n' + docTpl(data) + '\n' + $2;
}));

gulp.task('default', function() {
  return gulp.src('jetbrains/**/*')
    .pipe(zip('jetbrains-lmui.jar'))
    .pipe(gulp.dest('.'));
});
