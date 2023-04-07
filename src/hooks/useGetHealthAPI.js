import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getHealthApi } from "../services/getHealthApi";

export const useGetHealthAPI = () =>
  useQuery({
    queryKey: [QUERY_KEY.DEPARTMENT_HEALTH],
    queryFn: getHealthApi,
  });
