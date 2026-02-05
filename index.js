const datastructures = require('./dataStructures');
const algorithms = require('./algorithms');

module.exports = {
    ...datastructures,
    ...algorithms,
    ds: datastructures,
    algo: algorithms
}
