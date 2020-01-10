var colors = {
  brightgreen: '#52c435',
  green: '#97c232',
  yellowgreen: '#a1a237',
  yellow: '#d7af3b',
  orange: '#f17f4a',
  red: '#d5624f',
  blue: '#2082bf',
  lightgrey: '#9e9e9e',
  success: '#52c434',
  important: '#f17f4a',
  critical: '#d56250',
  infomational: '#2183c0',
  inactive: '#9e9e9e',
  blueviolet: '#8b42d9'
};

function slog(inOptions) {
  var title = inOptions.title,
    content = inOptions.content,
    color = colors[inOptions.color] || inOptions.color;

  var format = [
    '%c '.concat(title, ' %c ').concat(content, ' '),
    'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: '.concat('#606060', ';'),
    'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: '.concat(color, ';')
  ];

  console.log.apply(null, format);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = slog;
} else {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return nx;
    });
  } else {
    window.slog = slog;
  }
}
