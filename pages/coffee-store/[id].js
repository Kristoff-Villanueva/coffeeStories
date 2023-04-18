import Link from "next/link";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps(staticProps) {
	const params = staticProps.params;
	return {
		props: {
			coffeeStore: coffeeStoresData.find((coffeeStore) => {
				return coffeeStore.id === 0;
			}),
		},
	};
}

export function getStaticPaths() {
	return {
		paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
	};
}

const CoffeeStore = () => {
	const router = useRouter();
	const id = router.query.id;
	console.log(router);
	return (
		<div>
			{`Coffee Store Page ${id}`} <Link href="/">Back to Home</Link>
		</div>
	);
};

export default CoffeeStore;
