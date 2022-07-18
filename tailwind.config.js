/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {},
        colors: {
            lightblue: '#f2f7fe',
            blue: '#016AE9',
            white: '#ffffff',
            gray: '#F7F7F7',
            orange: '#FF0700',
        },
        fontSize: {
            vssm: ['12px', '14px'],
            vsm: ['14px', '16px'],
            sm: ['15px', '17px'],
            base: ['16px', '18px'],
            lg_2: ['17px', '19px'],
            lg_1: ['18px', '20px'],
            lg: ['20px', '22px'],
            xl: ['24px', '26px'],
        },
    },
    plugins: [],
}
