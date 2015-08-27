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

var parseBold = function(str) {
  var boldRegExp = /(\*\*)(.*?)\1/;
  var stra = [];
  while ((stra = boldRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<b>' + stra[2] + '</b>')
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
  var newLineRegExp = /(\n)/;
  var stra = [];
  while ((stra = newLineRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<br/>');
  }
  return str;
 }

 var parseCode = function(str) {
  var codeRegExp = /`{1}(\w+)`{1}/;
  var stra = [];
  while ((stra = codeRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<pre>' + stra[1] + '</pre>');
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
    str = parseCode(str);
    return str;
  }
};

module.exports = markdown;
