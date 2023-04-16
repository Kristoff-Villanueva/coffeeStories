import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Inter } from "next/font/google";
import Banner from "@/components/banner";
import Image from "next/image";
import Card from "@/components/card";
import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
	return {
		props: { coffeeStores },
	};
}

export default function Home(props) {
	const handleOnBannerClick = () => {
		console.log("Hi banner button");
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Connoisseur</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Banner
					buttonText="View Stores Nearby"
					handleOnClick={handleOnBannerClick}
				/>
				<div className={styles.heroImage}>
					<Image
						src="/hero-image.png"
						width={700}
						height={400}
						alt="girl drinking coffee"
					/>
				</div>
				<div className={styles.cardLayout}>
					{coffeeStores.map((cafe) => {
						return (
							<Card
								key={cafe.id}
								name={cafe.name}
								imgUrl={cafe.imgUrl}
								href={cafe.websiteUrl}
								alt={cafe.neighbourhood}
								className={styles.card}
							/>
						);
					})}
				</div>
			</main>
		</div>
	);
}
