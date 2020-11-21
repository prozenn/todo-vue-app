exports.arrayMove = function () {
    Array.prototype.move = function (from, to) {
        this.splice(to, 0, this.splice(from, 1)[0]);
        return this;
    }
}

exports.getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}