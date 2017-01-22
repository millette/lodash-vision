'use strict'

// npm
const _ = require('lodash')

const partials = { }
const helpers = { }
let main

const makeTpl = (t) => _.template(
  t,
  {
    imports: { partials: partials, helpers: helpers, main: main },
    variable: 'data'
  }
)

module.exports = {
  compile: (template, options) => {
    const tpl = makeTpl(template)
    return (context) => tpl(context)
  },
  registerPartial: (name, template) => { partials[name] = makeTpl(template) },
  registerHelper: (name, helper) => {
    if (name === 'main') {
      main = helper
    } else {
      helpers[name] = helper
    }
  }
}
