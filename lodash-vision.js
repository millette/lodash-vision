'use strict'

// npm
const _ = require('_')

const partials = { }
const makeTpl = (t) => _.template(
  t,
  {
    imports: {
      partials: partials
    },
    variable: 'data'
  }
)

module.exports = {
  compile: (template) => {
    const tpl = makeTpl(template)
    return (context) => tpl(context)
  },
  registerPartial: (name, template) => {
    partials[name] = makeTpl(template)
  }
}
