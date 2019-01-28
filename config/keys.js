// Keys.JS -> Return Dev or Production keys

if (process.env.NODE_ENV === 'production'){
  module.exports = require('./prod');

} else {
  module.exports = require('./dev');
}