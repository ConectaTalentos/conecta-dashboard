import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://application.conecta-talentos.com.br',
  headers: {
    Authorizarion: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhiOWVhY2M4LThkMTAtNGE3OC05ZjlmLTJlYzMzMThhOTQzMyIsImlhdCI6MTYwNjQxMDQ4MSwiZXhwIjoxNjM3OTQ2NDgxfQ.rqp-VTt06mYHcrktzasdgP8-IplyWuOdixeYvMfF3cQ'
  }
})
