import axios from "axios";

const ROOT_API = "http://localhost:3001";

export async function getDetailSupplier(id: string) {
  const URL = `supplier/get-supplier/${id}`;

  const response = await axios.get(`${ROOT_API}/${URL}`);

  const axiosResponse = response;

  return axiosResponse.data;
}
