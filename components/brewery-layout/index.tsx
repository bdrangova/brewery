import { ReactElement, useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchBrewery } from '../../shared/helpers';
import Loading from '../../shared/components/loading';
import BreweryDisplay from '../brewery-display';

import {
  BreweryLayoutWrapper,
  GoBackWrapper,
} from './styles';
import { Brewery } from '../../shared/types';

function BreweryLayout({id}): ReactElement {
  const [breweryState, setBreweryState] = useState<Brewery>(null);

  useEffect(() => {
    setBreweryState(null);
      fetchBrewery(id).then((response) => setBreweryState(response));
  },[])

  return (
    <BreweryLayoutWrapper>
      <GoBackWrapper><Link href={'/'}><a>Go Back</a></Link></GoBackWrapper>
      {breweryState !== null ?
        <BreweryDisplay brewery={breweryState} /> :
        <Loading />
      }
    </BreweryLayoutWrapper>
    
  );
}

export default BreweryLayout;
