/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#D4FF00',
        'primary-dark': '#1E3A5F',
        'primary-purple': '#6B4E9E',
        'success': '#52C41A',
        'warning': '#FAAD14',
        'error': '#FF4D4F',
        'info': '#1890FF',
        'bg': '#F5F7FA',
        'card': '#FFFFFF',
        'border': '#E8E8E8',
        'text-primary': '#1F2329',
        'text-secondary': '#646A73',
        'text-disabled': '#BBBFC4'
      },
      fontFamily: {
        'sans': ['PingFang SC', 'SF Pro Display', 'Microsoft YaHei', 'Roboto', 'sans-serif']
      },
      fontSize: {
        'display': ['48px', '60px'],
        'heading': ['32px', '40px'],
        'title': ['24px', '32px'],
        'subtitle': ['18px', '26px'],
        'body': ['16px', '24px'],
        'small': ['14px', '20px'],
        'tiny': ['12px', '18px']
      },
      fontWeight: {
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 600
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        'xxl': '24px'
      },
      borderRadius: {
        'xl': '42px',
        '2xl': '40px',
        'card': '32px',
        'button': '40px',
        'feature': '24px'
      },
      boxShadow: {
        'low': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'high': '0 8px 24px rgba(0, 0, 0, 0.12)'
      },
      screens: {
        'iphone': '393px',
        'iphone-xl': '430px'
      }
    },
  },
  plugins: [],
}
