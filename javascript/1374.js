var generateTheString = function(n) {
    return n % 1 === 1 ? new Array(n).fill("a").join("") : new Array(n-1).fill("a").join("") + "b"
};