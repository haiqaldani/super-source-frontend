import axios from 'axios';
import { ResponseAPI, SupplierTypes } from '../services/data-types/'
import { useApi } from '../config/api'
// import { CheckoutTypes } from './data-types';

const ROOT_API = "http://localhost:3001/"

export async function searchSupplier(keyword: string) {
  const { call, isValidating, data } = useApi<ResponseAPI<SupplierTypes[]>>()

  const searchSuppliers = (keyword: string) => {
    return call({
      url: `/supplier/search`,
      method: 'get',
      params: {
        q: keyword
      }
    })
  }

  return {
    searchSuppliers,
    searchingSuppliers: isValidating,
    suppliers: data?.data
  }
}

export async function getDetailSupplier(id: string) {
  const URL = `supplier/get-supplier/${id}`;

  const response = await axios.get(`${ROOT_API}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}
