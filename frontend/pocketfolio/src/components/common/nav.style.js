// styled Component
import styled from 'styled-components';

// Navbar
export const NavContainer = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 3.5rem;
  z-index: 999;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

// Logo Img
export const NavLogoImg = styled.img`
  left: 1.5rem;
  top: 1.5rem;
  height: 100%;
  cursor: pointer;
`;

// Nav Search
export const NavSearch = styled.input`
  width: 30%;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #bbb;
  padding: 6px 0 6px 0;
  padding-left: 40px;
  margin: 6px;

  /* &::-webkit-input-placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 1px center;
    background-repeat: no-repeat;
    padding-left: 30px;
  } */

  &:focus {
    border: 1px solid #333333;
    outline: none;
  }
`;

// Nav Login Button
export const LoginBotton = styled.button`
  margin: 30px;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  border: none;
  background-color: #3c2e9b;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #35297e;
  }

  &:active {
    background-color: #35297e;
    box-shadow: 0.5px 0.5px 0.5px #333;
  }
`;

// Search Img
export const SearchImg = styled.img`
  position: relative;
  left: -835px;
  width: 17px;
`;
