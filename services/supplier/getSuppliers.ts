import axios from "axios";

const ROOT_API = "http://localhost:3001";

export async function getSuppliers() {
  const URL = `supplier/get-supplier`;

  const response = await axios.get(`${ROOT_API}/${URL}`);

  const axiosResponse = response;

  return axiosResponse.data;
}
