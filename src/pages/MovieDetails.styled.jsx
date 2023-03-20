import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  min-height: 64px;
  max-width: 900px;
  margin-bottom: 15px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  left: 50%;
`;

export const DetailsInfo = styled.div`
  padding: 0 15px;
`;

export const Image = styled.img`
  display: block;
`;

export const Text = styled.h2`
  text-align: center;
`;

export const InfoContainer = styled.header`
  min-height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  > ul {
    display: flex;
    gap: 12px;
  }
`;

export const StyledLink = styled(NavLink)`
  width: 100px;
  padding: 10px 20px;
  border-radius: 4px;
  color: #212121;
  font-weight: 500;

  &:hover {
    color: orangered;
    border: 2px solid orangered;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const ButtonBack = styled.button`
  position: relative;
  left: 50%;
  transform: translate(-50%);

  padding: 10px 20px;
  margin: 15px;
  border-radius: 4px;
  color: #212121;
  font-weight: 700;
  min-width: 200px;
  background-color: #e0e0e0;
  border: none;

  &:hover {
    color: white;
    background-color: orangered;
  }
`;
