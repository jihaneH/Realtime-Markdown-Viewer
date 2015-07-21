 var parseHeadline = function(str) {
   var headlineRegExp =  /^(\#{1,6})([^\#\n]+)$/m;
   var stra = [];
   while ((stra = headlineRegExp.exec(str)) !== null) {
     count = stra[1].length;
     str = str.replace(stra[0], '<h' + count + '>' + stra[2] + '</h' + count + '>' + '\n');
   }
   return str;
 }

 var parseCodeBlock = function(str) {
  var codeRegExp = /```(.*?)```/;
  var stra = [];
  while ((stra = codeRegExp.exec(str)) !== null) {
    str = str.replace(stra[0], '<code>' + stra[1] + '</code>');
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

var markdown = {
  parse: function (str, strict) {
    'use strict';
    str = parseHeadline(str);
    str = parseCodeBlock(str);
    str = parseHorizontaleLine(str);
    return str;
  }
};

module.exports = markdown;
