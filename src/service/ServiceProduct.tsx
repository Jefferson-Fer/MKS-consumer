import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
})

export const getAllProducts = async () => {
  try {
    const response = await api.get(`/products`, {
      params: {
        page: 1,
        rows: 8,
        sortBy: 'id',
        orderBy: 'DESC',
      },
    })

    console.log(response.data)

    return response.data
  } catch (error) {
    console.log(error)
  }
}
