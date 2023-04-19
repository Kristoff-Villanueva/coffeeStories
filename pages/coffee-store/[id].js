import Link from "next/link";
import { useRouter } from "next/router";
import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps(staticProps) {
	const params = staticProps.params;
	console.log("params", params);
	return {
		props: {
			coffeeStore: coffeeStoresData.find((coffeeStore) => {
				return coffeeStore.id.toString() === params.id;
			}),
		},
	};
}

export function getStaticPaths() {
	return {
		paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
		fallback: true,
	};
}

const CoffeeStore = (props) => {
	const router = useRouter();
	const id = router.query.id;
	console.log(props);

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{`Coffee Store Page ${id}`} <Link href="/">Back to Home</Link>
			<p>{props.coffeeStore.address}</p>
			<p>{props.coffeeStore.name}</p>
		</div>
	);
};

export default CoffeeStore;
