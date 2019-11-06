import { ReactElement } from 'react';
import Link from 'next/link';
import Content from '../../shared/components/content';
import { Beer } from '../../shared/types';

interface BeerDisplayProps {
  beer: Beer
}

function BeerDisplay({ beer }: BeerDisplayProps): ReactElement {
  const brewery = beer.breweries[0];
  const image = {
    alt: 'beer',
    src: beer.labels ? beer.labels.medium : '',
  }

  return (
    <Content 
      type='beer'
      image={image}
      name={beer.name}
      description={beer.style.description}
    >
      <p>
        Brewery: 
        <Link href={`/brewery?id=${brewery.id}`}>
          <a>{brewery.name}</a>
        </Link>
      </p>
    </Content>
  )
}

export default BeerDisplay;
