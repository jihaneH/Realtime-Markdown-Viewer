 var parseHeadline = function(str) {
   var headlineRegExp =  /^(\#{1,6})([^\#\n]+)$/m;
   var stra = [];
   while ((stra = headlineRegExp.exec(str)) !== null) {
     count = stra[1].length;
     str = str.replace(stra[0], '<h' + count + '>' + stra[2] + '</h' + count + '>' + '\n');
   }
   return str;
 }

 var parseItalic = function(str) {
  var italicRegExp = /(\*|_)(.*?)\1/;
  var stra = [];
  while ((stra = italicRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<i>' + stra[2] + '</i>')
  }
  return str;
}

var parseStrong = function(str) {
  var strongRegExp = /(~~)(.*?)\1/;
  var stra = [];
  while ((stra = strongRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<strong>' + stra[2] + '</strong>')
  }
  return str;
}

 var parseHorizontaleLine = function(str) {
  var horizontalRegExp = /^(?:([\*\-_] ?)+)\1\1$/gm;
  var stra = [];
  while ((stra = horizontalRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '\n<hr/>\n');
  }
  return str;
 }

 var parseLink = function(str) {
  var linkRegExp = /\[([^\[]+)\]\(([^\)]+)\)/;
  var stra = [];
  while ((stra = linkRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<a ' + 'href="' + stra[2] + '">' + stra[1] + '</a>');
  }
  return str;
 }

var parseNewLine = function(str) {
  var newLineRegExp = /(^|[^\n])\n{1}(?!\n)/;
  var stra = []; var tmp;
  while ((stra = newLineRegExp.exec(str)) !== null) {
    tmp = stra[0].replace('\n', '<br/>')
    str = str.replace(stra[0], tmp);
  }
  return str;
 }

 var parseCodeBlock = function(str) {
  var codeRegExp = /`{1}(\w+)`{1}/;
  var stra = [];
  while ((stra = codeRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<pre>' + stra[1] + '</pre>');
  }
  return str;
 }

 var parseBlockQuote = function(str) {
  var quoteRegExp = /\:\"(.*?)\"\:/
  var stra = [];
  while ((stra = quoteRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<blockquote>' + stra[1] + '</blockquote>');
  }
  return str;
 }

 var parseImage = function(str) {
  var imageRegExp = /(!\[.*?]\()(.+?)(\))/g;
  var stra = [];
  while ((stra = imageRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<img src= "'+ stra[2] + '">');
  }
  return str;
 }

 var parseDel = function(str) {
  var delRegExp = /\{(.*?)\}/
  var stra = [];
  while ((stra = delRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<del>' + stra[1] + '</del>');
  }
  return str;
 }

var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseNewLine(str);
    str = parseHeadline(str);
    str = parseBold(str);
    str = parseItalic(str);
    str = parseStrong(str);
    str = parseHorizontaleLine(str);
    str = parseLink(str);
    str = parseCodeBlock(str);
    str = parseBlockQuote(str);
    str = parseImage(str);
    str = parseDel(str);
    return str;
  }
};

module.exports = markdown;
