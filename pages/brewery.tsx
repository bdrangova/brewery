import { useRouter } from 'next/router';
import Meta from '../shared/components/meta/meta';
import BreweryLayout from '../components/brewery-layout';

const Brewery = () => {
  const router = useRouter();

  return (
    <>
      <Meta />
      { router.query.id &&  <BreweryLayout id={router.query.id} />}
    </>
  )
}

export default Brewery;