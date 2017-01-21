'use strict'

// npm
const _ = require('lodash')

const partials = { }
const helpers = { }

const makeTpl = (t) => _.template(
  t,
  {
    imports: {
      partials: partials,
      helpers: helpers
    },
    variable: 'data'
  }
)

module.exports = {
  compile: (template, options) => {
    console.log('COMPILE OPTIONS:', options)
    const tpl = makeTpl(template)
    return (context) => tpl(context)
  },
  registerPartial: (name, template) => {
    partials[name] = makeTpl(template)
  },
  registerHelper: (name, helper) => {
    helpers[name] = helper
  }
}


