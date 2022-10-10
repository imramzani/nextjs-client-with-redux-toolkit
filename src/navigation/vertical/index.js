// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'FE Test',
      icon: CreditCardOutline,
      path: '/cards'
    },
  ]
}

export default navigation
