import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../constants/query-key";
import { getPricePlanAPI } from "../services/getPricePlaneAPI";

export const useGetPricePlan = () =>
  useQuery({
    queryKey: [QUERY_KEY.PRICE_PLAN],
    queryFn: getPricePlanAPI,
  });
