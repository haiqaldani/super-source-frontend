import axios from "axios";

const ROOT_API = "https://t3vraj0nbd.execute-api.us-east-1.amazonaws.com/";

export async function searchSuppliers(query: string, page?: number) {
  const URL = `supplier/search`;

  const response = await axios.get(`${ROOT_API}/${URL}`, {
    params: {
      q: query,
      page: page,
    },
  });
  const axiosResponse = response;

  return axiosResponse.data;
}
