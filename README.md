glq-email
=========

Email middleware for [glq](https://github.com/jwerle/glq)

## install

```sh
$ npm install glq-email
```

## usage

All properties for [email](https://github.com/aheckmann/node-email).
Each property can be a `string` or a `function`. If a property value is
a `function` it is called with the current `commit` passed in. See the
example below.

```js
var email = require('glq-email')

// client
var repo = push('/path/to/repo', 7777);

repo.use(email({
  to: 'you@email.com',
  from: 'git@blah.com',
  subject: function (commit) { return 'git['+ commit.hash +']' },
  body: function (commit) { return commit.message; }
}));
```

## license

MIT
