import axios from "axios";

const ROOT_API = "http://localhost:3001";

export async function searchSuppliers(query: string, page?: string) {
  const URL = `supplier/search`;

  const response = await axios.get(`${ROOT_API}/${URL}`, {
    params: {
      q: query,
      page: page
    },
  });
  const axiosResponse = response;

  return axiosResponse.data;
}
