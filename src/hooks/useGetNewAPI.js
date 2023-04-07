import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getNewAPI } from "../services/getNewApi";

export const useGetNewAPI = () =>
  useQuery({
    queryKey: [QUERY_KEY.NEWS],
    queryFn: async () => {
      const { data } = await getNewAPI();
      return data;
    },
  });
