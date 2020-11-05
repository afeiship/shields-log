<p align="center">
  <a href="https://afeiship.github.io/shields-log">
    <img width="880" src="https://tva1.sinaimg.cn/large/006tNbRwgy1gasn2p10n7j311a0kw44l.jpg">
  </a>
</p>

# shields-log
> Output logger for `https://shields.io/` style.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S shields-log 
```

## usage
```js
const slog = require('shields-log');

slog({ title: 'Platform', content: 'MacOs' });
```

## colors
| key          | value   |
| ------------ | ------- |
| brightgreen  | #52c435 |
| green        | #97c232 |
| yellowgreen  | #a1a237 |
| yellow       | #d7af3b |
| orange       | #f17f4a |
| red          | #d5624f |
| blue         | #2082bf |
| lightgrey    | #9e9e9e |
| success      | #52c434 |
| important    | #f17f4a |
| critical     | #d56250 |
| infomational | #2183c0 |
| inactive     | #9e9e9e |
| blueviolet     | #8b42d9 |

## resources
- https://shields.io/category/size


## license
Code released under [the MIT license](https://github.com/afeiship/shields-log/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/shields-log
[version-url]: https://npmjs.org/package/@feizheng/shields-log

[license-image]: https://img.shields.io/npm/l/@feizheng/shields-log
[license-url]: https://github.com/afeiship/shields-log/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/shields-log
[size-url]: https://github.com/afeiship/shields-log/blob/master/dist/shields-log.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/shields-log
[download-url]: https://www.npmjs.com/package/@feizheng/shields-log
