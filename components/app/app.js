(function () {
	'use strict';

	// import
	const Menu = window.Menu;
	const Form = window.Form;

	// let URL = 'https://components-21-30.firebaseio.com/menu/-Kz5NeJk9exl8TnG0ZZf.json';
	const URL_DB_forSend_new = 'https://breaking-down-stupidity.firebaseio.com/menu.json';
	const URL_DB = 'https://breaking-down-stupidity.firebaseio.com/menu/-LW1dPr9iJ2fP_nRcMcf.json'; // # -LW1dPr9iJ2fP_nRcMcf
	const URL_mocs = '/mocks/menu.mock.json';
	let URL = URL_mocs;

	/**
	 * Компонента "Форма"
	 */
	class App {
		/**
		 * @param {Object} param0
		 * @param {HTMLElement} param0.el
		 */
		constructor({el}) {
			this.menu = new Menu({
				el: document.querySelector('.js-menu'),

				onRemove() {

				},

				onPick(item) {
					console.log(item);
				},

				data: {},
			});

			this.form = new Form({ // eslint-disable-line no-unused-vars
				el: el.querySelector('.js-form'),
			});

			this.form.on('add', ({detail}) => {
				this.menu.addItemToMenu(detail);
				this.addItemToDB();
			});

			this.fetchData()
				.then((result) => {
					this.menu.setData(result);

					/** uncommented lines below were used for adding data from menu.moc.js to database **/
					// return this.saveData();
				})
				// .then((result) => {
				//
				// })
				.catch(() => {
					console.log('It was a mistake somewhere in promise');
				});
		}

		addItemToDB() {
			return this.request('PUT', URL_DB, this.menu.getData());
		}

		fetchDataFromMoc() { // recieve data from mocs
			return this.request('GET', URL_mocs);
		}

		fetchData() { // recieve data from mocs
			return this.request('GET', URL_DB);
		}

		saveData() { // save data to firebase
			return this.request('POST', URL_DB_forSend_new, this.menu.getData());
		}


		request(method, url, data) {
			return new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();

				xhr.addEventListener('readystatechange', (evt) => {
					console.log(evt);
				});

				xhr.addEventListener('load', () => {
					if (xhr.status === 200) {
						const result = JSON.parse(xhr.responseText);
						console.log(result);
						resolve(result);
					} else {
						console.error('Что-то пошло не так!');

						reject(xhr);
					}
				});

				xhr.open(method, url, true);

				const dataJSON = data ? JSON.stringify(data) : null;

				xhr.send(dataJSON);
			});
		}
	}

	// export
	window.App = App;
})();
