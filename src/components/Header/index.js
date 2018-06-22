import styled from 'styled-components';

const Header = styled.header`
  border-bottom: solid 1px ${props => props.theme.colors.ui.chrome200};
  display: flex;
  height: 5rem;
  align-items: center;
  padding: 16px;

  h1 {
    margin: 0;
  }
`

export default Header;
