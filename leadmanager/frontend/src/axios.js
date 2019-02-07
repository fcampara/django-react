import instance from 'axios'

export const axios = instance.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 1000
})