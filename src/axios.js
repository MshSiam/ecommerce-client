import axios from "axios"

const instence = axios.create({
  baseURL: "https://shrouded-hollows-96088.herokuapp.com"
})

export default instence
