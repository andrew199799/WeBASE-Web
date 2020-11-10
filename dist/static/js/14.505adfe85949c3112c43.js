(window.webpackJsonp=window.webpackJsonp||[]).push([[14,13,19,20,21],{0:function(e,t){},xUqo:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__("EJiy"),_typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}exports.validate=validate,exports.stringToByte=stringToByte,exports.isString=isString,exports.isBool=isBool,exports.isLetter=isLetter,exports.isUint=isUint,exports.isBytes=isBytes,exports.validateEvent=validateEvent;var Web3Utils=__webpack_require__("W6Pm");function validate(e,t){switch(e){case"address":return{is:Web3Utils.isAddress(t),msg:Web3Utils.isAddress(t)?"":"Invalid input: Unexpected end of address input "};case"bytes":return{is:Web3Utils.isHexStrict(t),msg:Web3Utils.isHexStrict(t)?"":"Invalid input: Unexpected end of bytes input"};case"bytes4":return{is:Web3Utils.isHexStrict(t),msg:Web3Utils.isHexStrict(t)?"":"Invalid input: Unexpected end of bytes4 input"};case"bytes32":return{is:Web3Utils.isHexStrict(t),msg:Web3Utils.isHexStrict(t)?"":"Invalid input: Unexpected end of bytes32 input"}}}function stringToByte(e){var t,s,i=new Array;t=e.length;for(var n=0;n<t;n++)(s=e.charCodeAt(n))>=65536&&s<=1114111?(i.push(s>>18&7|240),i.push(s>>12&63|128),i.push(s>>6&63|128),i.push(63&s|128)):s>=2048&&s<=65535?(i.push(s>>12&15|224),i.push(s>>6&63|128),i.push(63&s|128)):s>=128&&s<=2047?(i.push(s>>6&31|192),i.push(63&s|128)):i.push(255&s);return i}function isString(e){return"string"==typeof e||e instanceof String}function isBool(str){if(!str)return!0;var isBool=null;try{isBool=eval(str.toLowerCase()),console.log(isBool,void 0===isBool?"undefined":(0,_typeof3.default)(isBool)),isBool="boolean"==typeof isBool}catch(e){console.log(e)}return isBool}function isLetter(e){return!e||/^[A-Za-z0-9]+$/.test(e)}function isUint(e){if(!e)return!0;try{var t=/^([0]|[1-9][0-9]*)$/;return console.log(t.test(e)),t.test(e)}catch(e){}}function isBytes(e){}function validateEvent(e,t){switch(e=(e=e).replace(/[0-9]+/g,"")){case"address":return{is:Web3Utils.isAddress(t),msg:Web3Utils.isAddress(t)?"":"Invalid input: Unexpected end of address input "};case"bytes":return{is:Web3Utils.isHexStrict(t),msg:Web3Utils.isHexStrict(t)?"":"Invalid input: Unexpected end of bytes input"};case"uint":return{is:isUint(t),msg:"Invalid input: Unexpected end of uint input"};case"string":return{is:isLetter(t),msg:"Invalid input: Unexpected end of string input"};case"bool":return{is:isBool(t),msg:"Invalid input: Unexpected end of bool input"}}}}}]);