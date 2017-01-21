# lodash-vision
[![Build Status](https://travis-ci.org/millette/lodash-vision.svg?branch=master)](https://travis-ci.org/millette/lodash-vision)
[![Coverage Status](https://coveralls.io/repos/github/millette/lodash-vision/badge.svg?branch=master)](https://coveralls.io/github/millette/lodash-vision?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/lodash-vision.svg)](https://gemnasium.com/github.com/millette/lodash-vision)
> Lodash template engine for use with visionary (hapi).

Lodash-vision let's you configure [visionary][] to use lodash templates
with hapi.

[visionary][] is used to configure a views engine when using [rejoice][]
(the hapi CLI) or [glue][]. This plugin allows configuring the views manager
from a manifest which is a plain JSON file and cannot contain calls
to server.views() or require the rendering engine.

If you are not loading your views manager from a static JSON manifest file,
you probably don't need this plugin. See [vision][].

## Usage example

```
server.register(require(['vision']))
  .then(() => {
    server.views({
      engines: { html: require('lodash-vision') },
      path: 'templates',
      partialsPath: 'templates/partials',
      isCached: true
    })
    return server.start(() => {
      console.log('\nStarted the web server on port ' + server.info.port)
    })
  })
  .catch((err) => {
    console.error('Error:', err)
  })
})

```


[rejoice]: <https://github.com/hapijs/rejoice>
[glue]: <https://github.com/hapijs/glue>
[visionary]: <https://github.com/hapijs/visionary>
[vision]: <https://github.com/hapijs/vision>
