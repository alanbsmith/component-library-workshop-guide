import React, { Fragment } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Link from 'gatsby-link';
import styled from 'styled-components';

import buildGlobalStyles from '../utils/buildGlobalStyles';
import theme from '../utils/theme';

import Header from '../components/Header';
import LeftNav from '../components/LeftNav';
import menus from '../components/LeftNav/menus';

injectGlobal([buildGlobalStyles(theme)]);

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutBlock>
        <Header>
          <h1>Component Library Workshop</h1>
        </Header>
        <Content>
          <Nav>
            <LeftNav menus={menus} />
          </Nav>
          <Body>
            {props.children({
              components: { pre: Pre },
              ...props,
            })}
          </Body>
        </Content>
      </LayoutBlock>
    </ThemeProvider>
  )
}

export default Layout;

const Pre = styled.pre`
  background: ${props => props.theme.colors.ui.chrome050};
  border: ${props => props.theme.colors.ui.chrome200};
`;

const LayoutBlock = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
`;


const Content = styled.section`
  display: flex;
  flex: 1;
`;

const Nav = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 5rem);
`

const Body = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-height: calc(100vh - 5rem);
  max-width: 1000px;
  padding: 0 16px;
  overflow-y: scroll;
`
