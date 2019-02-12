import { createMuiTheme } from '@material-ui/core/styles'
import { palette } from './palette'
import { MuiPaper } from './MuiPaper'
import { MuiButton } from './MuiButton'
import { MuiAppBar } from './MuiAppBar'
import { MuiDrawer } from './MuiDrawer'

export const theme = createMuiTheme({
  palette,
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiPaper,
    MuiAppBar,
    MuiDrawer,
    MuiButton
  }
})