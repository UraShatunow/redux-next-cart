import Items from '../components/items';
import Link from 'next/link';
import Cart from '../components/cart';

const HomePage = () => {
	return (
		<>
			<p>Главная</p>
			<Link href="/cart" passHref><a href="passed">В корзину</a></Link>
			<Items />
			<Cart />
		</>
	)
}

export default HomePage;