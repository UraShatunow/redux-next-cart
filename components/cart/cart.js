import styles from './cart.module.css';
import { connect } from 'react-redux';
import {
	bookAddedToCart,
	bookRemovedFromCart,
	allBooksRemovedFromCart
} from '../../actions';


const Cart = ({ items, total, onIncrease, onDecrease, onDelete }) => {

	console.log(items);
	console.log(total);

	const cartItems = items.map((i) => {
		return (
			<div key={i.id}>
				<p>{i.id}</p>
				<p>{i.title}</p>
				<p>Count: {i.count}</p>
				<p>Price: {i.total}</p>

				<button onClick={() => onIncrease(i.id)}>Добавить еще</button>
				<button onClick={() => onDecrease(i.id)}>Убрать 1</button>
				<button onClick={() => onDelete(i.id)}>Убрать все</button>
			</div>
		)
	})

	return (
		<div className={styles.content}>
			{cartItems}
		</div>
	);
}

const mapStateToProps = ({ cartItems, orderTotal }) => {
	return {
		items: cartItems,
		total: orderTotal
	};
};

const mapDispatchToProps = {
	onIncrease: bookAddedToCart,
	onDecrease: bookRemovedFromCart,
	onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);