const fs = require('fs');

const unreleasedModrunnerVersion = 'v1';
let lastestReleasedVersion;

try {
	lastestReleasedVersion = JSON.parse(
		fs.readFileSync('versions.json', 'utf-8')
	)[0];
} catch {
	console.error();
}

const baseUrl = '/';
const url = 'https://modrunner.net/';
const repoUrl = 'https://github.com/smcmo/modrunner-bot';
const discordUrl = 'https://discord.gg/fm88jhzEbt';
const koFiUrl = 'https://ko-fi.com/beansquared';

const navbarItems = [
	{
		label: 'Docs',
		type: 'doc',
		docId: 'introduction',
		position: 'left',
	},
	{
		label: 'Blog',
		to: 'blog',
		position: 'left',
	},
	{
		label: 'Community',
		position: 'left',
		items: [
			{
				label: 'Get Involved',
				href: 'https://github.com/smcmo/modrunner-bot/blob/main/CONTRIBUTING.md',
				target: '_self',
			},
			{
				label: 'Discord',
				href: discordUrl,
				target: '_self',
			},
		],
	},
	{
		label: 'About',
		to: 'about/intro',
		items: [
			{
				label: 'What is Modrunner?',
				to: 'about/intro',
			},
			{
				label: 'Governance',
				to: 'about/governance',
			},
			{
				label: 'Terms of Service',
				to: 'about/tos',
			},
			{
				label: 'Privacy Policy',
				to: 'about/pp',
			},
		],
	},
	{
		label: 'Releases',
		to: 'releases',
		position: 'right',
		className: 'navbarIcon releasesIcon',
	},
	{
		label: 'GitHub',
		href: repoUrl,
		'aria-label': 'GitHub',
		position: 'right',
		className: 'navbarIcon gitHubIcon',
		target: '_self',
	},
	{
		type: 'localeDropdown',
		position: 'right',
		dropdownItemsAfter: [
			{
				to: 'https://google.com/',
				label: 'Help us translate',
			},
		],
	},
];

const footerLinks = [
	{
		title: 'Repositories',
		items: [
			{
				label: 'Modrunner-Bot',
				href: repoUrl,
				target: '_self',
			},
			{
				label: 'Modrunner-Docs',
				href: 'https://github.com/smcmo/modrunner-docs',
				target: '_self',
			},
		],
	},
	{
		title: 'Contact',
		items: [
			{
				label: 'Email',
				href: 'mailto:beansquared@cybermechanics.org',
				target: '_self',
			},
			{
				label: 'Twitter',
				href: 'https://twitter.com/beansquared_1',
				target: '_self',
			},
			/*
			{
				label: 'Mastodon',
				href: 'https://google.com/',
				rel: 'me',
				target: '_self',
			},
			*/
		],
	},
	{
		title: 'Network',
		items: [
			{
				label: 'Blog',
				to: 'blog',
			},
			{
				label: 'Ko-Fi',
				href: koFiUrl,
				target: '_self',
			},
			{
				label: 'GitHub',
				href: repoUrl,
				target: '_self',
			},
		],
	},
	{
		title: 'Community',
		items: [
			{
				label: 'Discord',
				href: discordUrl,
				target: '_self',
			},
		],
	},
	{
		title: 'Legal',
		items: [
			{
				label: 'Terms of Service',
				to: 'about/tos',
			},
			{
				label: 'Privacy Policy',
				to: 'about/pp',
			},
		],
	},
];

async function siteConfig() {
	return {
		title: 'Modrunner',
		tagline: 'Search and track mods in Discord',
		organizationName: 'smcmo',
		projectName: 'modrunner',
		baseUrl: baseUrl,
		favicon: '/meta/favicon-400x400.png',
		url: url,
		i18n: {
			defaultLocale: 'en',
			locales: ['en'],
		},
		themeConfig: {
			metadata: [
				{
					name: 'keywords',
					content:
						'discord, bots, blog, docs, wiki, modrinth, minecraft, curseforge',
				},
			],
			prism: {
				theme: require('prism-react-renderer/themes/github'),
				darkTheme: require('prism-react-renderer/themes/dracula'),
				additionalLanguages: ['json5'],
			},
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			/*
			announcementBar: {
				content: 'YEEEEEEEEEEEEEET',
				backgroundColor: 'black',
				textColor: 'white',
			},
			*/
			navbar: {
				hideOnScroll: false,
				logo: {
					alt: 'Modrunner Logo',
					src: '/meta/favicon-400x400.png',
					srcDark: '/meta/favicon-400x400.png',
				},
				items: navbarItems,
			},
			footer: {
				style: 'dark',
				links: footerLinks,
				copyright: `Copyright © ${new Date().getFullYear()} Modrunner Contributors. Apache 2.0`,
			},
		},
		presets: [
			[
				'@docusaurus/preset-classic',
				{
					docs: {
						routeBasePath: '/',
						path: './docs',
						exclude: [],
						sidebarPath: require.resolve('./sidebars.js'),
						showLastUpdateTime: true,
						editUrl: ({ docPath, versionDocsDirPath }) => {
							// stuff
						},
						sidebarCollapsible: true,
						/*
						versions: {
							current: {
								label: unreleasedModrunnerVersion,
								path: unreleasedModrunnerVersion,
							},
							...(lastestReleasedVersion && {
								[lastestReleasedVersion]: {
									label: lastestReleasedVersion,
									path: lastestReleasedVersion,
								},
							}),
						},
						*/
						async sidebarItemsGenerator({
							defaultSidebarItemsGenerator,
							...args
						}) {
							const sidebarItems = await defaultSidebarItemsGenerator(args);
							return sidebarItems.filter(
								(item) =>
									// This makes sure that the landing pages are not duplicated in the sidebars
									item.id !== 'guides/readme' && item.id !== 'references/readme'
							);
						},
					},
					theme: {
						customCss: require.resolve('./src/css/custom.css'),
					},
					blog: {
						blogSidebarCount: 0,
						feedOptions: {
							type: 'all',
							copyright: `Copyright © ${new Date().getFullYear()} Modrunner Contributors.`,
						},
					},
				},
			],
		],
		plugins: [],
	};
}

module.exports = siteConfig;
