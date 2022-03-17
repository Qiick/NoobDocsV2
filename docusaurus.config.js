// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NoobHosting Kennisbank',
  tagline: '',
  url: 'https://kb.noobhosting.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Qiick', // Usually your GitHub org/user name.
  projectName: 'NoobDocsV2', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/qiick/noobdocsv2/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/qiick/noobdocsv2/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'NoobHosting Kennisbank',
        logo: {
          alt: '',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
         /**{to: '/blog', label: 'Blog', position: 'left'},
          
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categorieën',
            items: [
              {
                label: 'Minecraft',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Website',
                href: 'https://noobhosting.net',
              },
              {
                label: 'Minecraft Panel',
                href: 'https://panel.noobhosting.net',
              },
              /** {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              }, */
            ],
          },
          /**{
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              }, 
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NoobHosting. Gemaakt met Docusaurus. En beheerd door Brian / Qiick`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
