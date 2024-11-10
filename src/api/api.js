
import axios from 'axios'


const API = 'https://671b70fb2c842d92c37fec8a.mockapi.io/productsapp/products'


const getProducts = () => axios.get(API)


export { getProducts }