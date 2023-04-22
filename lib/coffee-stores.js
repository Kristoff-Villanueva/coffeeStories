const getUrlCoffeeStores = (latLong, query, limit) => {
	return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export const fetchCoffeeStore = async () => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: process.env.FOURSQUARE_API_KEY,
		},
	};

	const response = await fetch(
		getUrlCoffeeStores("10.2989824,123.8923595", "coffee", 6),
		options
	);
	const data = await response.json();
	return data.results;

	// catch((err) => console.error(err));
};
