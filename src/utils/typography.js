import Typography from "typography";

import theme from './theme';

const { font } = theme;

const typography = new Typography({
  baseFontSize: 16,
  headerFontFamily: [font.primary].concat(font.primaryFallback),
  bodyFontFamily: [font.primary].concat(font.primaryFallback),
});

export default typography;
