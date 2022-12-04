import { useQuery } from "@tanstack/react-query";
import { getDetails } from "services/alphaVantage/details";
import { queryKeys } from "constants/queryKeys";

export function useDetails(symbol) {
  const { data, isLoading } = useQuery(
    [queryKeys.symbolDetails, symbol],
    () => getDetails(symbol),
    {
      enabled: !!symbol,
      keepPreviousData: true,
      staleTime: 1000 * 60 * 30, // 30 mins
      refetchOnWindowFocus: false,
      select: ({ data }) => {
        return {
          metaData: data["Meta Data"],
          timeSeries: data["Time Series (Daily)"],
        };
      },
    },
  );

  return {
    data,
    isLoading,
  };
}
