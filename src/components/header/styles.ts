import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background: rgb(3 37 65);
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const Menu = styled.div`
  padding: 0 40px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const LeftMenu = styled.div`
  display: flex;
`;
export const RightMenu = styled.div`
  display: flex;
`;

export const Logo = styled.h3`
  font-size: 28px;
  background: linear-gradient(to right, #00cc99 0%, #33ccff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  margin-right: 16px;
  letter-spacing: 1px;
`;

export const MenuList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
`;

export const MenuItem = styled.li`
  color: #fff;
  margin-right: 14px;
  a {
    padding: 0 8px;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  outline: none !important;
`;
