import useSWR from "swr";
import { fetcher } from "../services/apiService";

function useProducts(url) {
  const { data, isLoading, error } = useSWR(url, fetcher);
  return { data, isLoading, error };
}

export default useProducts;
