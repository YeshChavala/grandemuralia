import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export default StyledImage;
