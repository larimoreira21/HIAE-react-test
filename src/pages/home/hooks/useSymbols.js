import { useQuery } from "@tanstack/react-query";
import { getSymbols } from "services/alphaVantage/home";
import { queryKeys } from "constants/queryKeys";

export function useSymbols(search) {
  const { data } = useQuery(
    [queryKeys.symbolSearch, { search }],
    () => getSymbols(search),
    {
      enabled: !!search,
      keepPreviousData: true,
      staleTime: 1000 * 60 * 30, //30 mins
      refetchOnWindowFocus: false,
      select: ({ data }) =>
        data?.bestMatches?.map((match, index) => {
          return {
            label: match["1. symbol"],
            name: match["2. name"],
            id: index,
          };
        }),
    },
  );

  return {
    options: data || [],
  };
}
