import { ReactElement } from 'react';

import {
  ContentWrapper,
  Information,
  Description,
  Image,
} from './styles';
import { ContentType } from '../../types';

const FALLBACK_IMAGE = 'https://beta.daft.ie/static/images/fallbacks/no-image-size740x480.jpg';

interface ImageProps {
  alt: string,
  src: string,
}

interface ImageDisplayProps {
  image: ImageProps,
}

function ImageDisplay({ image }: ImageDisplayProps): ReactElement {
  return (
    <Image alt={image.alt} src={image.src !== '' ? image.src : FALLBACK_IMAGE} />
  );
}

interface ContentProps {
  type: ContentType,
  image: ImageProps,
  name: string,
  description: string,
  children?: ReactElement,
}

function Content({ type, image, name, description, children}: ContentProps): ReactElement {
  return (
    <ContentWrapper type={type}>
      <ImageDisplay image={image} />
      <Information>
        <h2>{name}</h2>
        <Description>{description}</Description>
        {children}
      </Information>
    </ContentWrapper>
  );
}

export default Content;
