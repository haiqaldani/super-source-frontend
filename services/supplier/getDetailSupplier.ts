import axios from "axios";

const ROOT_API = "https://t3vraj0nbd.execute-api.us-east-1.amazonaws.com/";

export async function getDetailSupplier(id: string) {
  const URL = `supplier/get-supplier/${id}`;

  const response = await axios.get(`${ROOT_API}/${URL}`);

  const axiosResponse = response;

  return axiosResponse.data;
}
