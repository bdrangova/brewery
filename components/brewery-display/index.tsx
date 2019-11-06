import { ReactElement } from 'react';
import Content from '../../shared/components/content';
import { Brewery } from '../../shared/types';

interface BreweryDisplayProps {
  brewery: Brewery,
}

function BreweryDisplay({ brewery }: BreweryDisplayProps): ReactElement {
  const image = {
    alt: 'brewery',
    src: brewery.images ? brewery.images.large : '',
  }

  return (
    <Content
      type='brewery'
      image={image}
      name={brewery.name}
      description={brewery.description}
    >
      <p>Date established: {brewery.established}</p>
    </Content>
  )
}

export default BreweryDisplay;
