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
`;

export const Image = styled.img`
  width: 45%;
  object-fit: contain;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  font-size: 14px;
  color: #000;
`;

export const Description = styled.p`
  padding: 10px 0px;
  text-align: justify;
`;