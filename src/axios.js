import axios from "axios"

const instence = axios.create({
  baseURL: "http://localhost:5000"
})

export default instence
