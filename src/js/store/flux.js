const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContact() {
				fetch(url + "agenda/downtown xii")
					.then(response => response.json())
					.then(result => {
						console.log("Get Contact", result),
							setStore({
								contacts: result
							});
					})
					.catch(e => console.error(e));
			}
		}
	};
};

export default getState;
