import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'Stockedhome Docs',
    tagline: 'Dinosaurs are cool',
    favicon: 'img/favicon.ico',

    // prod
    url: 'https://docs.stockedhome.app',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'darkreader-lock',
                content: 'true',
            },
        },
    ],

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/Stockedhome/stockedhome-documentation',
                    routeBasePath: '/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        colorMode: {
            defaultMode: 'dark'
        },
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Stockedhome',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'hostingSidebar',
                    position: 'left',
                    label: 'Hosting',
                },
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    type: 'search',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Hosting',
                            to: '/hosting/intro',
                        },
                    ],
                },
                {
                    title: 'Stockedhome',
                    items: [
                        {
                            label: 'Homepage',
                            href: 'https://stockedhome.app',
                        },
                        {
                            label: 'Web App',
                            href: 'https://stockedhome.app/web',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Stockedhome',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/tywaPjYYR5',
                        },
                    ],
                },
            ],
            logo: {
                src: 'assets/logo.256.png',
                height: 256,
                width: 256,
                href: 'https://stockedhome.app',
            },
            copyright: `Copyright © ${new Date().getFullYear()} BellCube. Stockedhome is licensed under BSNC-MPL-2.0-1.0.\nBuilt with Docusaurus.`,

        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
