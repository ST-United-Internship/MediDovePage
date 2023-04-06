import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getServiceAPI } from "../services/getServiceApi";

export const useGetServiceAPI = () =>
  useQuery({
    queryKey: [QUERY_KEY.SERVICE],
    queryFn: async () => {
      const { data } = await getServiceAPI();
      return data;
    },
  });
