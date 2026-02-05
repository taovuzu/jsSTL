const { map, set } = require('./containers');

module.exports = {
    queue: require("./queue"),
    priority_queue: require('./heap'),
    stack: require('./stack'),
    vector: require('./vector'),
    deque: require('./deque'),
    list: require('./list'),
    pair: require('./pair'),
    map: map,
    set: set
}