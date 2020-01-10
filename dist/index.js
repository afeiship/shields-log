/*!
 * name: shields-log
 * url: https://github.com/afeiship/shields-log
 * version: 1.0.0
 * license: MIT
 */

function slog(o){var n=o.title,d=o.content,e=o.backgroundColor,c=["%c ".concat(n," %c ").concat(d," "),"padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060",";"),"padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(e,";")];console.log.apply(null,c)}"undefined"!=typeof module&&module.exports?module.exports=slog:"function"==typeof define&&define.amd?define([],function(){return nx}):window.slog=slog;