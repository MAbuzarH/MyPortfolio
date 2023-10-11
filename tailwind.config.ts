import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px',
      },
      colors: {
        accent: '#08E95E',
      },
      backgroundImage:{
        lightc: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #fff 5px, #fff 100px)',
        darkc: 'repeating-radial-gradient(rgba(225, 225, 225, 0.5) 2px, #000 5px, #000 100px)',
        lightclg: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #fff 5px, #fff 80px)',
        darkclg: 'repeating-radial-gradient(rgba(225, 225, 225, 0.5) 2px, #000 5px, #000 80px)',
        lightcmd: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #fff 7px, #fff 40px)',
        darkcmd: 'repeating-radial-gradient(rgba(225, 225, 225, 0.5) 2px, #000 7px, #000 40px)',
        lightcsm: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #fff 4px, #fff 20px)',
        darkcsm: 'repeating-radial-gradient(rgba(225, 225, 225, 0.5) 2px, #000 4px, #000 20px)',
      },
    },
    screens:{
    "2xl":{max:'1535px'},
    xl:{max:'1279px'},
    lg:{max:'1023px'},
    md:{max:'767px'},
    sm:{max:'639px'},
    xs:{max:'479px'},
    }
  },
  plugins: [],
}

export default config
