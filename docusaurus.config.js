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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Enphoria', // Usually your GitHub org/user name.
  projectName: 'enphoria.github.io', // Usually your repo name.

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
        title: 'Enphoria',
        logo: {
          alt: 'Enphoria',
          src: 'img/Enphoria.png',
        },
        items: [
          {
           type: 'doc',
            docId: 'Manual Usuario/Manual de Usuario',
            position: 'left',
            label: 'Fault Location',
          },

          /*{to: '/blog', label: 'Blog', position: 'left'},/**/

          {
            href: 'https://github.com/enphoria/ms-fault-location',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Manual de Usuario',
                href: 'https://github.com/zepben/ms-fault-location/blob/main/documentation/user-manual-spanish/manual-de-usuario.md',
              },

              {
                label: 'Manual tecnico',
                href: 'https://github.com/zepben/ms-fault-location/blob/main/documentation/tech-manual-spanish/manual_tecnico.md',
              },           
        ],
      },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/enphoria/',
              },
            ],
          },
        ],
        copyright: `Enphoria © ${new Date().getFullYear()}.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
