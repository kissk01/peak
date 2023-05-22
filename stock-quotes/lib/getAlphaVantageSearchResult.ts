export default async function getAlphaVantageSearchResult(searchTerm: string) {
  const searchQuery = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_SEARCH_QUERY;

  const searchResponse = await fetch(searchQuery + searchTerm);

  return searchResponse.json();
}
