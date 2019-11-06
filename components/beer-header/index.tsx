import { ReactElement } from 'react';
import {
  Wrapper,
  GenerateBeerButton,
} from './styles';

interface BeerHeaderProps {
  generateBeer(): void,
}

function BeerHeader({ generateBeer }: BeerHeaderProps): ReactElement {

  return (
    <Wrapper>
      <h1>The Random Beer App</h1>
      <GenerateBeerButton onClick={generateBeer}>Show Another Beer</GenerateBeerButton>
    </Wrapper>
  );
}

export default BeerHeader;
