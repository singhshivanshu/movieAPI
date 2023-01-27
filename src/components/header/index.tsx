import React, { FunctionComponent, useState } from "react";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/icomoon/search";

import {
  Container,
  HeaderSection,
  LeftMenu,
  Logo,
  Menu,
  MenuItem,
  MenuList,
  RightMenu,
  SearchButton,
} from "./styles";

const Header: FunctionComponent  = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  console.log(toggleSearch);
  return (
    <HeaderSection>
      <Container>
        <Menu>
          <LeftMenu>
            <Logo>MovieDB</Logo>
            <MenuList>
              <MenuItem>
                <a>Movies</a>
              </MenuItem>
              <MenuItem>
                <a>TV Shows</a>
              </MenuItem>
              <MenuItem>
                <a>People</a>
              </MenuItem>
            </MenuList>
          </LeftMenu>
          <RightMenu>
            <SearchButton onClick={() => setToggleSearch(!toggleSearch)}>
              <div style={{ color: "#fff" }}>
                <Icon icon={search} size={20} />
              </div>
            </SearchButton>
          </RightMenu>
        </Menu>
      </Container>
    </HeaderSection>
  );
};

export default Header;
