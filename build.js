const fs = require('fs')
const workbenchColors = require('ayu/ayu-mirage-bordered.json').colors
const tokenColors = require('Material-theme/themes/OneDark-Pro-bold.json').tokenColors

// le edits
workbenchColors['editorGroup.emptyBackground'] = workbenchColors['editorGroup.background']
workbenchColors['editorGroup.background'] = undefined

workbenchColors['gitDecoration.conflictingResourceForeground'] = '#f27983b3'

const jsVarColors = tokenColors.find(e => e.name === 'js variable readwrite')
jsVarColors.scope = jsVarColors.scope.split(',').filter(s => s !== 'meta.object-literal.key').join()

tokenColors.push({
    name: 'js object key',
    scope: 'meta.object-literal.key',
    settings: {
      foreground: '#56b6c2'
    }
})

tokenColors.find(e => e.name === 'Attribute IDs').settings.fontStyle = ''
tokenColors.find(e => e.name === 'Attribute class').settings.fontStyle = ''
// end le edits

const theme = {
    name: 'Ayu One Dark Pro',
    type: 'dark',
    colors: workbenchColors,
    tokenColors: tokenColors
}

const themeJSON = JSON.stringify(theme, '', 2)

fs.writeFileSync('./themes/ayu-one-dark-pro-color-theme.json', themeJSON)
