// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const math = require('remark-math');
const katex = require('rehype-katex');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'CMswap Docs',
    tagline: '',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'th'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                    'https://github.com/coshi190/docs-cmswap',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                    'https://github.com/coshi190/docs-cmswap',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            title: 'CMswap Docs',
            logo: {
                alt: 'My Site Logo',
                src: 'img/favicon.ico',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/blog',
                    label: 'Blog', 
                    position: 'left'
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/coshi190/docs-cmswap',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                title: 'Community',
                    items: [
                        {
                            label: 'App',
                            href: 'https://cmswap.xyz',
                        },
                        {
                            label: 'Discord',
                            href: 'http://discord.gg/k92ReT5EYy',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/CMswap',
                        },
                    ],
                },
                {
                title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/coshi190/docs-cmswap',
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
