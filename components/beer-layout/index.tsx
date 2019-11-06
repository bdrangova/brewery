import { ReactElement, useState, useEffect } from 'react';
import BeerHeader from '../beer-header';
import BeerDisplay from '../beer-display';
import { generateBeer } from '../../shared/helpers';
import Loading from '../../shared/components/loading';
import { Beer } from '../../shared/types';
import {
  BeerLayoutWrapper,
} from './styles';

function BeerLayout(): ReactElement {
  const [beerState, setBeerState] = useState<Beer>(null);

  const generateNewBeer = () => {
    setBeerState(null);
    generateBeer().then((response) => {
      setBeerState(response)
    });
  }

  useEffect(() => {
    generateNewBeer();
  },[])

  return (
    <BeerLayoutWrapper>
      <BeerHeader generateBeer={generateNewBeer} />
      { beerState !== null ? <BeerDisplay beer={beerState}/> : <Loading /> }
    </BeerLayoutWrapper>
    
  );
}

export default BeerLayout;
