import React from 'react';
import styled from 'styled-components';

const BackgroundImage = () => {
    return (
        <StyledBackground>
            <img src="../assets/backgroundLogin.jpg" alt="Background" />
        </StyledBackground>
    );
};

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default BackgroundImage;
