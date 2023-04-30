import { createApi } from "unsplash-js";

const unsplash = createApi({
	accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlCoffeeStores = (latLong, query, limit) => {
	return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
	const photos = await unsplash.search.getPhotos({
		query: "coffee shop",
		page: 1,
		perPage: 6,
	});

	const unsplashResults = photos.response.results;

	return unsplashResults.map((result) => result.urls.small);
};

export const fetchCoffeeStore = async () => {
	const photos = await getListOfCoffeeStorePhotos();
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: process.env.FOURSQUARE_API_KEY,
		},
	};

	const response = await fetch(
		getUrlCoffeeStores("10.3473761,123.9033729", "coffee", 6),
		options
	);
	const data = await response.json();

	return data.results.map((result, idx) => {
		const address = result.location.address;
		return {
			country: result.location.country,
			id: result.fsq_id,
			imgUrl: photos.length > 0 ? photos[idx] : null,
			name: result.name,
			locality: result.location.locality,
			categories: result.categories,
			address: address ? address : result.location.formatted_address,
		};
	});

	// catch((err) => console.error(err));
};
