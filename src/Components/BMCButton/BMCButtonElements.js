import styled from 'styled-components';

export const Button = styled.a`
  position: fixed;
  bottom: 15px;
  right: 20px;
  background-color: ${({ theme }) => theme.secondaryFont};
  border-radius: 100%;
  padding: 15px 15px;
  
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  &:hover{
    transform:scale(1.1);
  }
`;

export const Image = styled.img`
  height: 35px;
  width: 35px;
`;
