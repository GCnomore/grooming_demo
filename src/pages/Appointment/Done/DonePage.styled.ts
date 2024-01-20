import styled from 'styled-components';

export const RightSection = styled.section<{imgSrc: string}>`
  width: 100%;
  height: 100%;
  background-image: url(${({imgSrc}) => imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
`;