// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Enphoria',
    tagline: '',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: ' ',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Productos',
                logo: {
                    alt: 'Productos',
                    src: 'img/Enphoria.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'Manual de Usuario',
                        position: 'left',
                        label: 'Enphoria',
                    },

                    {to: '/blog', label: 'Zepben', position: 'left'},
                ],
            },
            
            footer: {
                style: 'light',
                links: [
                    
                    {
                        title: 'Enphoria',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/enphoria/',
                            },
                        ],
                    },

                    {
                        title: 'Zepben',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/zepben',
                            },
                        ],
                    },                
                ],
                copyright: `Enphoria © ${new Date().getFullYear()}.`,
            },
            prism: {
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
