import { createMuiTheme } from '@material-ui/core/styles'
import { palette } from './palette'
import { MuiPaper } from './MuiPaper'

const teste = createMuiTheme()

export const theme = createMuiTheme({
  palette,
  overrides: {
    MuiPaper: {
      boxShadow: 'dark',
      margin: 50,
    },
  },
  label: {
    textTransform: 'capitalize'
  }
})