import styled from 'styled-components';

export const RightSection = styled.section<{imgSrc: string}>`
  width: 100%;
  height: 100%;
  background-image: url(${({imgSrc}) => imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.5rem;

    @media screen and (max-width: 480px) {
      font-size: 1.25rem;
    }
  }
  h4 {
    font-size: 1.25rem;

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

export const CustomerInfoContainer = styled(InfoSection)`
  > div:first-child {
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.5rem;
  }
`;

export const Appointment = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-left: 1rem;
`;

export const PetInfoContainer = styled(InfoSection)`
  > div:first-child {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.5rem;

    > p {
      margin-left: 0.5rem;
      font-size: 0.85rem;
    }
  }
`;

export const ServiceDetail = styled.div`
  margin-bottom: 2rem;
  margin-left: 1rem;

  > div:first-child {
    display: flex;
    align-items: center;

    > span {
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;
