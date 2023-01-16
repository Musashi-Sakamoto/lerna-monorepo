'use strict';

module.exports = randomNumber;

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min) + min);
    num;
}
