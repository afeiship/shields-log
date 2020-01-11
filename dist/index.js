/*!
 * name: shields-log
 * url: https://github.com/afeiship/shields-log
 * version: 1.0.0
 * license: MIT
 */

!function(){var a={brightgreen:"#52c435",green:"#97c232",yellowgreen:"#a1a237",yellow:"#d7af3b",orange:"#f17f4a",red:"#d5624f",blue:"#2082bf",lightgrey:"#9e9e9e",success:"#52c434",important:"#f17f4a",critical:"#d56250",infomational:"#2183c0",inactive:"#9e9e9e",blueviolet:"#8b42d9"};function e(e){var o=e.title,n=e.content,c=a[e.color]||e.color||a.blue,r=["%c ".concat(o," %c ").concat(n," "),"padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: ".concat("#606060",";"),"padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: ".concat(c,";")];console.log.apply(null,r)}"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define([],function(){return e}):window.slog=e}();