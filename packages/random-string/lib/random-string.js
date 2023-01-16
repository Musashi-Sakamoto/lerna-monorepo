'use strict';

module.exports = randomString;

const charactersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function randomString(len = 5) {
    // TODO
    const str = [...Array(len)]
        .map((i) =>
            charactersSet.charAt(Math.floor(Math.random() * charactersSet.length))
        )
        .join("")
    return str;
}
