import React from 'react';
import styled from 'styled-components';

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 991003;
  background-color: rgba(153, 153, 153, 0.25);
`;

const Loader = styled.div`
  display: block;
  position: relative;
  top: 50%;
  margin: 0 auto;
  border-radius: 50%;
  border: 0 solid rgba(109, 103, 103, 0);
  border-top: 3px solid rgba(31, 29, 29, 0.58);
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Waiting = () => (
  <BackDrop>
    <Loader />
  </BackDrop>
);

export default Waiting;
