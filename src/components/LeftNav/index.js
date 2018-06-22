import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

class SubMenu extends Component {
  state = {
    showSubMenu: false,
  };

  render() {
    const { showSubMenu } = this.state;
    const { name, link, items } = this.props;
    return (
      <Li>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={link} style={{ flex: 1 }}>{name}</Link>
          {items && <Button onClick={() => this.setState({ showSubMenu: !showSubMenu })}> { showSubMenu ? '-' : '+' } </Button>}
        </div>
        {items && showSubMenu && <Menu menus={items} />}
      </Li>
    )
  }
}

class Menu extends Component {

  renderSubMenus() {
    return this.props.menus.map((menu, i) => (
      <SubMenu key={i} {...menu} />
    ))
  }

  render() {
    return (
      <Ul>
        {this.renderSubMenus()}
      </Ul>
    )
  }
}

function LeftNav({ menus }) {
  return (
    <LeftNavBlock>
      <Menu menus={menus} />
    </LeftNavBlock>
  )
}

export default LeftNav;


const Button = styled.button`
  border: solid 1px transparent;
  background: none;
  font-weight: 800;
  font-size: 16px;
  transition: border 200ms ease;

  &:hover, &:focus {
    border: solid 1px ${props => props.theme.colors.ui.chrome500};
  }
`;


const Ul = styled.ul`
  list-style: none;
  margin: 4px 0 4px 4px;
  padding: 4px 0 4px 4px;
`;

const Li = styled.li`
  padding: 4px 0 4px 4px;
  margin: 0;
`;

const LeftNavBlock = styled.nav`
  background: ${props => props.theme.colors.ui.chrome050};
  flex: 1;
  min-width: 240px;
  padding: 8px;
  overflow-y: scroll;
`
