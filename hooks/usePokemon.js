import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function usePokemon(id) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    fetcher
  );
  return {
    data,
    isLoading,
    error,
  };
}
