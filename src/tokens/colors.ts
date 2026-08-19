export const colors = {
  black: '#000000',
  white: '#FFFFFF',

  neutral: {
    900: '#1D1D1D',
    800: '#424242',
    700: '#838383',
    600: '#C3C3C3',
    500: '#DDDDDD',
    300: '#EBEBEB',
    100: '#F4F4F4',
    50: '#F9F9F9',
  },

  primary: {
    700: '#00A1AC',
    600: '#00BDC6',
    500: '#05C8CF',
    400: '#60D8DC',
    300: '#9EE8E9',
    200: '#D7F6F6',
    100: '#EAFCFB',
    50: '#F7FFFF',
  },

  auxiliary: {
    700: '#FF5A30',
    600: '#FF7750',
    500: '#FF9B7E',
    400: '#FFC1AE',
    300: '#FFDDD1',
    200: '#FFF0EC',
    100: '#FFF5F1',
    50: '#FFFCFC',
  },

  danger: {
    700: '#F52A2E',
    600: '#FF4445',
    500: '#F26566',
    400: '#FB8E8E',
    300: '#FFC5CC',
    200: '#FFE8EB',
    100: '#FFF0F0',
    50: '#FFFAFA',
  },

  warning: {
    700: '#FF9222',
    600: '#FFA424',
    500: '#FFC034',
    400: '#FFD97B',
    300: '#FFE7AC',
    200: '#FFF6DE',
    100: '#FFF8EC',
    50: '#FFFDF9',
  },

  success: {
    700: '#009358',
    600: '#26AF77',
    500: '#52BD8D',
    400: '#84CEAC',
    300: '#B4E1CB',
    200: '#DFF4E9',
    100: '#EFF9F5',
    50: '#FAFEFC',
  },

  info: {
    700: '#1E63DB',
    600: '#1675F1',
    500: '#2795FC',
    400: '#7EC0FD',
    300: '#AFD8FE',
    200: '#DEF0FE',
    100: '#EEF7FF',
    50: '#F6FCFF',
  },
} as const;

export const semanticColors = {
  text: {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    disabled: 'var(--color-text-disabled)',
    inverse: 'var(--color-text-inverse)',

    danger: 'var(--color-text-danger)',
    warning: 'var(--color-text-warning)',
    success: 'var(--color-text-success)',
    info: 'var(--color-text-info)',
  },

  background: {
    primary: 'var(--color-background-primary)',
    secondary: 'var(--color-background-secondary)',
    disabled: 'var(--color-background-disabled)',

    danger: 'var(--color-background-danger)',
    warning: 'var(--color-background-warning)',
    success: 'var(--color-background-success)',
    info: 'var(--color-background-info)',
  },

  border: {
    default: 'var(--color-border-default)',
    focus: 'var(--color-border-focus)',
    disabled: 'var(--color-border-disabled)',

    danger: 'var(--color-border-danger)',
    warning: 'var(--color-border-warning)',
    success: 'var(--color-border-success)',
    info: 'var(--color-border-info)',
  },

  action: {
    primary: 'var(--color-action-primary)',
    primaryHover: 'var(--color-action-primary-hover)',
    primaryActive: 'var(--color-action-primary-active)',

    secondary: 'var(--color-action-secondary)',
    secondaryHover: 'var(--color-action-secondary-hover)',
    secondaryActive: 'var(--color-action-secondary-active)',

    disabled: 'var(--color-action-disabled)',
  },

  focus: {
    ring: 'var(--color-focus-ring)',
  },
} as const;
