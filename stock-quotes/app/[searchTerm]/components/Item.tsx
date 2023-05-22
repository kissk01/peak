import Link from 'next/link';

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className='flex flex-col justify-center'>
      <h2>{result['2. name']}</h2>
      <p>{result['1. symbol']}</p>
    </div>
  );

  const content = <article className='m-4 max-w-lg'>{itemTextCol}</article>;

  return content;
}
