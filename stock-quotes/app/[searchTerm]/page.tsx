import getAlphaVantageSearchResult from '@/lib/getAlphaVantageSearchResult';
import Item from './components/Item';
import React from 'react';

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetadata({ params: { searchTerm } }: Props) {
  const searchPromise: Promise<SearchResult> =
    getAlphaVantageSearchResult(searchTerm);
  const data = await searchPromise;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if (!data?.bestMatches) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const searchPromise: Promise<SearchResult> =
    getAlphaVantageSearchResult(searchTerm);
  const searchData = await searchPromise;
  const results: Result[] | undefined = searchData?.bestMatches;
  const content = (
    <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
      {results && results.length > 0 ? (
        results.map((result) => {
          return <Item key={result['1. symbol']} result={result} />;
        })
      ) : (
        <h2>{`${searchTerm} Not found`}</h2>
      )}
    </main>
  );
  return <div>{content}</div>;
}
