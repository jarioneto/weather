import { createStitches } from '@stitches/react';
import { weather } from './themes';
import * as tokens from './tokens';

import type * as Stitches from '@stitches/react';

export type WeatherVariants<T> = Stitches.VariantProps<T>;

export const stitches = createStitches({
  prefix: 'weather-',
  theme: weather,
  media: tokens.media
});

export const { config, css, getCssText, globalCss, keyframes, styled, theme, createTheme } = stitches;
export const Tokens = tokens;

export type CSS = Stitches.CSS<typeof stitches>;
export type ComponentCSSProp = { css?: CSS; as?: React.ElementType };
export type SpaceThemeProps = `$${keyof typeof theme['space']}`;
export type SizeThemeProps = `$${keyof typeof theme['sizes']}`;
export type ColorThemeProps = `$${keyof typeof theme['colors']}`;
export type FontSizeThemeProps = `$${keyof typeof theme['fontSizes']}`;
export type FontsThemeProps = `$${keyof typeof theme['fonts']}`;
export type Theme = typeof theme;

export const weatherTheme = createTheme('weather-theme', weather);
