import { ReactElement } from 'react';
import styled from '@emotion/styled';
import { CheckCircle, CancelRounded } from '@material-ui/icons';
import Content from '../../shared/components/content';
import { Brewery } from '../../shared/types';

const Check = styled(CheckCircle)`
  color: #00b200;
`;

const Cancel = styled(CancelRounded)`
  color: #ff0000;
`;

const InBussinesSection = styled.p`
  display: flex;
  align-items: center;
`;
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
      <div>
        <p>Date established: {brewery.established}</p>
        <p>Website: <a href={brewery.website}>{brewery.website}</a></p>
        <InBussinesSection>In business: {brewery.isInBusiness === 'Y' ? <Check /> : <Cancel />}</InBussinesSection>
      </div>
    </Content>
  )
}

export default BreweryDisplay;
