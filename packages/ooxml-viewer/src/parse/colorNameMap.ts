import {ST_PresetColorVal} from './../openxml/Types';
/**
 * 内置颜色
 * 参考了 pptxjs 里的例子，并补充了 ST_PresetColorVal 里缺失的定义
 */
export const PresetColorMap: Record<
  ST_PresetColorVal | 'darkYellow' | 'none' | 'rebeccaPurple',
  string
> = {
  aliceBlue: '#f0f8ff',
  antiqueWhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedAlmond: '#ffebcd',
  blue: '#0000ff',
  blueViolet: '#8a2be2',
  brown: '#a52a2a',
  burlyWood: '#deb887',
  cadetBlue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerBlue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00FFFF',
  darkBlue: '#00008B',
  dkBlue: '#00008B',
  darkCyan: '#008B8B',
  dkCyan: '#008B8B',
  darkGoldenrod: '#b8860b',
  dkGoldenrod: '#b8860b',
  darkGray: '#A9A9A9',
  dkGray: '#A9A9A9',
  darkGreen: '#006400',
  dkGreen: '#006400',
  darkGrey: '#a9a9a9',
  dkGrey: '#a9a9a9',
  darkKhaki: '#bdb76b',
  dkKhaki: '#bdb76b',
  darkMagenta: '#800080',
  dkMagenta: '#800080',
  darkOliveGreen: '#556b2f',
  dkOliveGreen: '#556b2f',
  darkOrange: '#ff8c00',
  dkOrange: '#ff8c00',
  darkOrchid: '#9932cc',
  dkOrchid: '#9932cc',
  darkRed: '#8B0000',
  dkRed: '#8B0000',
  darkSalmon: '#e9967a',
  dkSalmon: '#e9967a',
  darkSeaGreen: '#8fbc8f',
  dkSeaGreen: '#8fbc8f',
  darkSlateBlue: '#483d8b',
  dkSlateBlue: '#483d8b',
  darkSlateGray: '#2f4f4f',
  dkSlateGray: '#2f4f4f',
  darkSlateGrey: '#2f4f4f',
  dkSlateGrey: '#2f4f4f',
  darkTurquoise: '#00ced1',
  dkTurquoise: '#00ced1',
  darkViolet: '#9400d3',
  dkViolet: '#9400d3',
  darkYellow: '#808000',
  deepPink: '#ff1493',
  deepSkyBlue: '#00bfff',
  dimGray: '#696969',
  dimGrey: '#696969',
  dodgerBlue: '#1e90ff',
  firebrick: '#b22222',
  floralWhite: '#fffaf0',
  forestGreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostWhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenYellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotPink: '#ff69b4',
  indianRed: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderBlush: '#fff0f5',
  lawnGreen: '#7cfc00',
  lemonChiffon: '#fffacd',
  lightBlue: '#add8e6',
  ltBlue: '#add8e6',
  lightCoral: '#f08080',
  ltCoral: '#f08080',
  lightCyan: '#e0ffff',
  ltCyan: '#e0ffff',
  lightGoldenrodYellow: '#fafad2',
  ltGoldenrodYellow: '#fafad2',
  lightGray: '#D3D3D3',
  ltGray: '#D3D3D3',
  lightGreen: '#90ee90',
  ltGreen: '#90ee90',
  lightGrey: '#d3d3d3',
  ltGrey: '#d3d3d3',
  lightPink: '#ffb6c1',
  ltPink: '#ffb6c1',
  lightSalmon: '#ffa07a',
  ltSalmon: '#ffa07a',
  lightSeaGreen: '#20b2aa',
  ltSeaGreen: '#20b2aa',
  lightSkyBlue: '#87cefa',
  ltSkyBlue: '#87cefa',
  lightSlateGray: '#778899',
  ltSlateGray: '#778899',
  lightSlateGrey: '#778899',
  ltSlateGrey: '#778899',
  lightSteelBlue: '#b0c4de',
  ltSteelBlue: '#b0c4de',
  lightYellow: '#ffffe0',
  ltYellow: '#ffffe0',
  lime: '#00ff00',
  limeGreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#FF00FF',
  maroon: '#800000',
  mediumAquamarine: '#66cdaa',
  medAquamarine: '#66cdaa',
  mediumBlue: '#0000cd',
  medBlue: '#0000cd',
  mediumOrchid: '#ba55d3',
  medOrchid: '#ba55d3',
  mediumPurple: '#9370db',
  medPurple: '#9370db',
  mediumSeaGreen: '#3cb371',
  medSeaGreen: '#3cb371',
  mediumSlateBlue: '#7b68ee',
  medSlateBlue: '#7b68ee',
  mediumSpringGreen: '#00fa9a',
  medSpringGreen: '#00fa9a',
  mediumTurquoise: '#48d1cc',
  medTurquoise: '#48d1cc',
  mediumVioletRed: '#c71585',
  medVioletRed: '#c71585',
  midnightBlue: '#191970',
  mintCream: '#f5fffa',
  mistyRose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajoWhite: '#ffdead',
  navy: '#000080',
  none: 'transparent',
  oldLace: '#fdf5e6',
  olive: '#808000',
  oliveDrab: '#6b8e23',
  orange: '#ffa500',
  orangeRed: '#ff4500',
  orchid: '#da70d6',
  paleGoldenrod: '#eee8aa',
  paleGreen: '#98fb98',
  paleTurquoise: '#afeeee',
  paleVioletRed: '#db7093',
  papayaWhip: '#ffefd5',
  peachPuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderBlue: '#b0e0e6',
  purple: '#800080',
  rebeccaPurple: '#663399',
  red: '#ff0000',
  rosyBrown: '#bc8f8f',
  royalBlue: '#4169e1',
  saddleBrown: '#8b4513',
  salmon: '#fa8072',
  sandyBrown: '#f4a460',
  seaGreen: '#2e8b57',
  seaShell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyBlue: '#87ceeb',
  slateBlue: '#6a5acd',
  slateGray: '#708090',
  slateGrey: '#708090',
  snow: '#fffafa',
  springGreen: '#00ff7f',
  steelBlue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whiteSmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowGreen: '#9acd32'
};
