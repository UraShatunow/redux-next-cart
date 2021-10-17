
export default class BookstoreService {

	data = [
		{
			id: 1,
			title: 'Production-Ready Microservices',
			author: 'Susan J. Fowler',
			price: 32
		},
		{
			id: 2,
			title: 'Release It!',
			author: 'Michael T. Nygard',
			price: 45
		}
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 1) {
					reject(new Error('Something bad happened'));
				} else {
					resolve(this.data);
				}
			}, 700);
		});
	}
}