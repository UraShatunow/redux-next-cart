import '../styles/globals.css';
import { Provider } from 'react-redux';
import BookstoreService from '../services/bookstore-service';
import { BookstoreServiceProvider } from '../components/bookstore-service-context';

import store from '../store';

function MyApp({ Component, pageProps }) {

	const bookstoreService = new BookstoreService();

	return (
		<Provider store={store}>
			<BookstoreServiceProvider value={bookstoreService}>
				<Component {...pageProps} />
			</BookstoreServiceProvider>
		</Provider>
	)
}

export default MyApp
