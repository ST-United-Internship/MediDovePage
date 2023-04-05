import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getAboutUsAPI } from "../services/getAboutUsApi";

export const useGetAboutUsAPI = () =>
  useQuery({
    queryKey: [QUERY_KEY.ABOUT_US],
    queryFn: async () => {
      const { data } = await getAboutUsAPI();
      return data;
    },
  });
