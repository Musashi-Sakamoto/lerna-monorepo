'use strict';

module.exports = randomNumber;

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    num;
}
