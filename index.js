import {
    SpellBase,
    SpellResult,
    DefaultDisplayType,
} from 'zeppelin-spell'

import flowchart from 'flowchart.js'

export default class FlowchartSpell extends SpellBase {
    constructor() {
        super("%flowchart")
    }

    interpret(paragraphText) {
        /**
         * `flowchart` library requires an existing DOM to render.
         * but the DOM is not created yet when `interpret` is called.
         * so Zeppelin allows to return callback function which accept a DOM element id.
         * the callback function will executed when the DOM is ready.
         */
        const callback = (targetElemId) => {
            let diagram = flowchart.parse(paragraphText)
            diagram.drawSVG(targetElemId, getOption())
        }

        /**
         * `interpret` method can return multiple results using `add()`
         * but now, we return just 1 result
         */
        return new SpellResult(
            callback
        )
    }
}

export function getOption() {
  return {
    'x': 0,
    'y': 0,
    'line-width': 3,
    'line-length': 50,
    'text-margin': 10,
    'font-size': 14,
    'font-color': 'black',
    'line-color': 'black',
    'element-color': 'black',
    'fill': 'white',
    'yes-text': 'yes',
    'no-text': 'no',
    'arrow-end': 'block',
    'scale': 1,
    // style symbol types
    'symbols': {
      'start': {
        'font-color': 'red',
        'element-color': 'green',
        'fill': 'yellow'
      },
      'end':{
        'class': 'end-element'
      }
    },
    // even flowstate support ;-)
    'flowstate' : {
      'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
      'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
      'future' : { 'fill' : '#FFFF99'},
      'request' : { 'fill' : 'blue'},
      'invalid': {'fill' : '#444444'},
      'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
      'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
    }
  }
}
