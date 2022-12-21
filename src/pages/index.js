import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client';
import Translate, { translate } from '@docusaurus/Translate';

// See translations for label and description

function FeatureCards() {
	const cards = [
		{
			label: translate({ message: 'Searching' }),
			description: translate({
				message:
					'Search for and share information about modding projects right within Discord.',
			}),
			link: 'commands/search',
			isDoc: true,
			linkText: translate({ message: 'Learn More' }),
			imageUrl: 'img/index/features/search.svg',
		},
		{
			label: translate({ message: 'Update Tracking' }),
			description: translate({
				message:
					'Monitor your favorite modding projects and get update notifications in Discord when they receive updates.',
			}),
			link: 'commands/track',
			isDoc: true,
			linkText: translate({ message: 'Learn More' }),
			imageUrl: 'img/index/features/track.svg',
		},
		{
			label: translate({ message: 'Customizability' }),
			description: translate({
				message:
					'Fine-tune Modrunner\'s settings to fit your personal tastes and needs as you see fit.',
			}),
			link: '',
			isDoc: false,
			linkText: translate({ message: 'Learn More' }),
			imageUrl: 'img/index/features/settings.svg',
		},
		{
			label: translate({ message: '...And More Coming Soon!' }),
			description: translate({
				message:
					"We're always working on adding new features, improving existing functions and fixing bugs.",
			}),
			link: 'https://github.com/smcmo/modrunner',
			isDoc: false,
			linkText: translate({ message: 'Learn More' }),
			imageUrl: 'img/index/features/wip.svg',
		},
	];

	const latestVersion = useLatestVersion();

	return (
		<section className={classNames(styles.cardContainer)}>
			{cards.map((card, index) => (
				<div className={classNames(styles.card, 'card')} key={index}>
					<div className={classNames(styles.cardSide, styles.cardLeading)}>
						<h2>{card.label}</h2>
						<p>{card.description}</p>
						<div className={classNames(styles.cardSpacer)}></div>
						<Link
							className={'button button--primary'}
							href={(card.isDoc ? latestVersion.path : '') + card.link}
						>
							{card.linkText}
						</Link>
					</div>
					<div className={classNames(styles.cardSide, styles.cardImage)}>
						<img src={card.imageUrl} />
					</div>
				</div>
			))}
		</section>
	);
}

function SupportedPlatforms() {
	const items = [
		{
			title: translate({ message: 'CurseForge' }),
			description: translate({
				message: 'Large multi-game modding platform.',
			}),
			imageUrl: 'img/index/platformsroadmap/curseforge.svg'
		},
		{
			title: translate({ message: 'Modrinth' }),
			description: translate({
				message: 'Minecraft-centric modding platform.',
			}),
			imageUrl: 'img/index/platformsroadmap/modrinth.svg',
		},
	];

	return (
		<div className={styles.row}>
			{items.map((item, index) => {
				return (
					<PlatformRoadmapEntry
						{...item}
						key={index}
						cname={styles.featureIcon}
					/>
				);
			})}
		</div>
	);
}

function Roadmap() {
	const items = [
		{
			title: translate({ message: 'Localization' }),
			description: translate({
				message: 'Access Modrunner in a variety of languages',
			}),
			imageUrl: 'img/index/platformsroadmap/translate.svg',
		},
		{
			title: translate({ message: 'Discover New Projects' }),
			description: translate({
				message:
					'Get a daily, weekly or monthly roundup of new projects to explore',
			}),
			imageUrl: 'img/index/platformsroadmap/stars.svg',
		},
		{
			title: translate({ message: 'More Platforms' }),
			description: translate({
				message: 'Support for more modding features',
			}),
			imageUrl: 'img/index/platformsroadmap/plus-circle.svg',
		},
	];

	return (
		<div className={styles.row}>
			{items.map((item, index) => {
				return (
					<PlatformRoadmapEntry
						{...item}
						key={index}
						cname={styles.roadmapIcon}
					/>
				);
			})}
		</div>
	);
}

function PlatformRoadmapEntry(props) {
	return (
		<div className={styles.featureRoadmapEntry}>
			<div className={styles.featureRoadmapIconContainer}>
				<img className={classNames(styles.featureRoadmapIcon)} src={props.imageUrl} />
			</div>
			<div className={styles.featureRoadmapText}>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</div>
		</div>
	);
}

function KoFiMembers() {
	// All logos should be a svg with a 500x100 frame (content resized inside
	// with padding to appear balanced).
	const items = [
		/*
		{
			name: 'Your Name Here',
			link: 'https://google.com/',
			logoColorDark: '1Password_color_dark.svg',
			logoColorLight: '1Password_color_light.svg',
		},
		*/
	];

	return (
		<div className={styles.row}>
			{items.map((item, index) => {
				return <Logo classNames={styles.sponsor} brand={item} key={index} />;
			})}
		</div>
	);
}

function AdditionalSupport() {
	// All logos should be a svg with a 500x100 frame (content resized inside
	// with padding to appear balanced).
	const items = [
		{
			name: 'Bisect Hosting',
			link: 'https://bisecthosting.com',
			logoColorDark: 'bh_light.svg',
			logoColorLight: 'bh_dark.svg',
		},
	];

	return (
		<div className={styles.row}>
			{items.map((item, index) => {
				return <Logo classNames={styles.sponsor} brand={item} key={index} />;
			})}
		</div>
	);
}

function Logo(props) {
	const { colorMode } = useColorMode();
	const [isDarkMode, setIsDarkMode] = useState(false);
	const logoDir = '/img/index/partners/';

	// Do not remove this!
	// This is a workaround for incorrect color modes being applied after reloading the page.
	useEffect(() => {
		setIsDarkMode(colorMode === 'dark');
	}, [colorMode]);

	// Pre-fetches images
	useEffect(() => {
		const images = [];

		const darkImage = (new Image().src = logoDir + props.brand.logoColorDark);
		images.push(darkImage);

		const lightImage = (new Image().src = logoDir + props.brand.logoColorLight);
		images.push(lightImage);
	}, []);

	return (
		<Link href={props.brand.link} className={styles.sponsor}>
			<img
				src={useBaseUrl(
					logoDir +
						(isDarkMode
							? props.brand.logoColorDark
							: props.brand.logoColorLight)
				)}
				alt={props.brand.name}
			/>
		</Link>
	);
}

function DynamicHeaderImage() {
	const { colorMode } = useColorMode();
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Pre-fetch images
	useEffect(() => {
		const images = [];

		const darkModrunnerLogo = (new Image().src = 'img/index/header.png');
		images.push(darkModrunnerLogo);

		const lightModrunnerLogo = (new Image().src = 'img/index/header.png');
		images.push(lightModrunnerLogo);
	}, []);

	// // Set dark mode correctly
	useEffect(() => {
		setIsDarkMode(colorMode === 'dark');
	}, [colorMode]);

	return (
		<img src={isDarkMode ? '/img/index/header.png' : '/img/index/header.png'} />
	);
}

export default function App() {
	const context = useDocusaurusContext();
	const latestVersion = useLatestVersion();

	return (
		<Layout
			title={`${context.siteConfig.tagline}`}
			description={translate({
				message:
					'Modrunner is a Discord bot for supporting modding communities. Search for modding projects on popular hosting sites, and track projects to receive notifications in Discord when they get updated.',
			})}
		>
			<header className={classNames('hero', styles.hero)}>
				<div className={classNames(styles.heroContainer)}>
					<p className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
						<Translate>Presenting</Translate>
					</p>
					<span className={classNames(styles.heroImage)}>
						<DynamicHeaderImage />
					</span>
					<div className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
						<Translate>
							A Discord bot for supporting modding communities by making it easy to find, share and track updates for modding projects.
						</Translate>
					</div>

					<div className={styles.spacer} />

					<Link
						className={classNames('button button--secondary button--lg')}
						to={
							'https://discord.com/api/oauth2/authorize?client_id=978413985722404924&permissions=2048&scope=bot%20applications.commands'
						}
					>
						<Translate>Add To Server</Translate>
					</Link>
				</div>
			</header>

			<main>
				<section className="container">
					<div className={classNames(styles.row)}>
						<FeatureCards />
					</div>
				</section>

				<section className="hero hero--dark">
					<div className="container">
						<h1 className={styles.h1}>Supported Platforms</h1>
						<div className={styles.row}>
							<SupportedPlatforms />
						</div>

						<div className={styles.spacer} />

						<h1 className={styles.h1}>Roadmap</h1>
						<div className={styles.row}>
							<Roadmap />
						</div>
					</div>
				</section>

				<div className={styles.spacer} />
				<div className="container">
					<section id="sponsors">
						<h1 className={styles.h1}>Ko-Fi Members</h1>
						<KoFiMembers />
					</section>
					<div className={styles.spacer} />

					<section>
						<h1 className={styles.h1}>Additional Support</h1>
						<AdditionalSupport />
					</section>
					<div className={styles.spacer} />
				</div>
			</main>
		</Layout>
	);
}
