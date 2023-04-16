import { useRouter } from "next/router";
import Head from "next/head";

const DynamicRoute = () => {
	const router = useRouter();
	const query = router.query.dynamic;

	return (
		<div>
			<Head>
				<title>{query}</title>
			</Head>
			Hi there!
		</div>
	);
};

export default DynamicRoute;
