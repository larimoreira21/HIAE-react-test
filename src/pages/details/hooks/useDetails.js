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
        const timeSeries = data["Time Series (Daily)"];

        const filteredTimeSeries = Object.keys(timeSeries)
          ?.reverse()
          .map((key) => {
            return {
              name: key,
              open: timeSeries[key]["1. open"],
              high: timeSeries[key]["2. high"],
              low: timeSeries[key]["3. low"],
              close: timeSeries[key]["4. close"],
            };
          });

        const lastRefreshedDate = data["Meta Data"]["3. Last Refreshed"];

        const newMetaData = {
          ...data["Meta Data"],
          ...timeSeries[lastRefreshedDate],
        };

        return {
          metaData: newMetaData,
          timeSeries: filteredTimeSeries,
        };
      },
    },
  );

  return {
    data,
    isLoading,
  };
}
