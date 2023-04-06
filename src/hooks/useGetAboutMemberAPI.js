import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getAboutMemberApi } from "../services/getAboutMemberApi";

export const useGetAboutMemberApi = () =>
  useQuery({
    queryKey: [QUERY_KEY.ABOUT_MEMBER],
    queryFn: async () => {
      const { data } = await getAboutMemberApi();
      return data;
    },
  });
