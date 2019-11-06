import styled from '@emotion/styled';
import { ContentType } from '../../types';

type ContentWrapperProps = {
  type: ContentType,
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 5px;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid ${(props: ContentWrapperProps) => (props.type === 'brewery' ? '#32c8de' : '#fff' )};
  border-radius: 5px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const Image = styled.img`
  width: 45%;
  object-fit: contain;
  @media only screen and (max-width: 768px) {
    width: 100%
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  font-size: 14px;
  color: #000;
  @media only screen and (max-width: 768px) {
    padding-top: 20px;
    width: 100%
  }
`;

export const Description = styled.p`
  padding: 10px 0px;
  text-align: justify;
`;