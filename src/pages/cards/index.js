// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardTechTest from 'src/views/cards/CardTechTest'

const CardBasic = () => {
  return (
    <Grid container spacing={2}>
      <Grid 
        item  xs={12} sm={6} md={4} 
        sx={{ marginBottom: 3, marginLeft: 2  }}
      >
        <CardTechTest />
      </Grid>
    </Grid>
  )
}

export default CardBasic
