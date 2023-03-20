import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1101;
  min-height: 64px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  > ul {
    display: flex;
  }

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  padding: 10px 20px;
  border-radius: 4px;
  color: #212121;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
