import {parseAStylesheet} from 'https://tomhodgins.github.io/parse-css/index.js'

export default function stripMozDocumentAtRule(string = '') {
  return parseAStylesheet(string).value.reduce(
    (output, rule, index) => {

      if (
        rule.type === 'AT-RULE'
        && rule.name === '-moz-document'
      ) {
        output += rule.value.value.map(token => token.toSource()).join('').trim()
      } else {
        output += rule.toSource()
      }

      return output
    },
    ''
  )
}

const file = Deno.args[0]
let data

try {
  data = new TextDecoder('utf-8').decode(Deno.readFileSync(file))
} catch (error) {
  data = file
}

console.log(
  stripMozDocumentAtRule(data)
)
