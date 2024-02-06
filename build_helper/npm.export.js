if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rama-staking.node.min.js')
} else {
  module.exports = require('./rama-staking.node.js')
}
