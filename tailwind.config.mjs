export default {
    content: [
        "./src/**/*.{tsx,astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#114F20",
                secondary: "#C3D9B6",
                accent: "#EDA415",
                background: "#F1F1F1",
            },
        },
    },
    darkMode: "class",

    plugins: [],
};
