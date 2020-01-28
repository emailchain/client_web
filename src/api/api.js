import axios from "axios";
const baseURL = localStorage.getItem("baseUrl")
const Repository = axios.create({ baseURL });
export default Repository;