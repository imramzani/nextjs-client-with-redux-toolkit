// ** MUI Imports

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'


import CartPlus from 'mdi-material-ui/CartPlus'

import { useSelector, useDispatch, } from 'react-redux'
import { selectData, getDataError, getDataStatus } from 'src/store/slice'

const CardTechTest = () => {
  const data = useSelector(selectData);
  const error = useSelector(getDataError)
  const status = useSelector(getDataStatus)
  console.log(data, error, status, "dari elector")

  const phones = data.products.map((phone) => {
    const phoneTag = phone.id
    return (
      <Card >
        <CardMedia sx={{ height: '14.5625rem' }} image={phone.thumbnail} />
        <CardHeader title={phone.title} />
        <CardContent>
          <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
            {phone.description}
          </Typography>
        </CardContent>
        <CardActions className='card-action-dense'>
          <Typography sx={{ fontWeight: 500, marginBottom: 3, marginLeft: 2  }}>
            Price:{' '}
            <Box component='span' sx={{ fontWeight: 'bold' }}>
              ${phone.price}
            </Box>
          </Typography>
        </CardActions>
        <CardActions className='card-action-dense'>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Button>
              <CartPlus fontSize='small' sx={{ marginRight: 2}} />
              Add to Card
            </Button>
          </Box>
        </CardActions>
      </Card>
  )});
  return <div>{phones}</div>;
}

export default CardTechTest
