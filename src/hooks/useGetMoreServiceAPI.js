import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getMoreServiceApi } from "../services/getMoreServiceApi";

export const useGetMoreServiceApi = () =>
  useQuery({
    queryKey: [QUERY_KEY.MORE_SERVICES],
    queryFn: async () => {
      const { data } = await getMoreServiceApi();
      return data;
    },
  });
