function buildGlobalStyles(theme) {
  return `
    html {
      height: 100%;
    }
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: ${theme.font.primary};
      font-size: 16px;
      font-weight: 400;
      height: 100%;
      margin: 0;

      button,
      input,
      select,
      textarea {
        font-family: ${theme.font.primary};
      }

      h1,h2,h3,h4,h5,h6 {
        font-weight: 600;
        margin: 16px 0;
      }

      a, a:visited {
        color: ${theme.colors.ui.link};
        text-decoration: none;
        &:hover {
          color: ${theme.colors.ui.linkHover};
          text-decoration: underline;
        }
      }

    }
    #___gatsby {
      display: flex;
      min-height: 100%;
    }
  `;
}

export default buildGlobalStyles;
