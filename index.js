
/**
 * Module dependencies
 */

var Email = require('email').Email;

/**
 * Email middleware for `glq'
 *
 * @api public
 * @param {Object} opts
 */

module.exports = function (opts) {

  if ('object' != typeof opts) {
    throw new TypeError("expecting object");
  }

  function discern (value, fallback, commit) {
    return (
      'function' == typeof value ? value(commit) :
      'string' == typeof value ? value : fallback || ""
    );
  }

  return function (commit, next) {
    var msg = new Email({
      to: discern(opts.to, null, commit),
      from: discern(opts.from || opts.to, "glq", commit),
      subject: discern(opts.subject, "glq: No Subject", commit),
      body: discern(opts.body, JSON.stringify(commit), commit)
    });

    msg.send(next);
  };

};
