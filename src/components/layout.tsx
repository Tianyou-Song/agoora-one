import Head from "next/head";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Lorem Ipsum";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle,
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<img
							src="/images/profile.jpg"
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<button type="button">
								<img
									src="/images/profile.jpg"
									className={`${styles.headerImage} ${utilStyles.borderCircle}`}
									alt={name}
								/>
							</button>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<button type="button" className={utilStyles.colorInherit}>{name}</button>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<button type="button">← Back to home</button>
					</Link>
				</div>
			)}
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	home: PropTypes.bool,
};

Layout.defaultProps = {
	home: false,
};
