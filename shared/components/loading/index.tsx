/**
 * Code used from here https://loading.io/css/
 */

import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const animation = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;

const Loader = styled.div`
  color: #000;
  display: block;
  position: relative;
  width: 64px;
  height: 64px;
  align-self: center;
  div {
    position: absolute;
    border: 4px solid #000;
    opacity: 1;
    border-radius: 50%;
    animation: ${animation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

const Wrapper = styled.div`
  align-self: center;
  margin-top: 20px;
`;

function Loading() {
  return (
    <Wrapper>
      <Loader>
        <div></div><div></div>
      </Loader>
    </Wrapper>
  );
}

export default Loading;
