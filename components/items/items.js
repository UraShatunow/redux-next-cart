import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';


const Items = (props) => {

	useEffect(() => {
		props.fetchBooks()
	}, [])

	const { books, onAddedToCart } = props;

	console.log(books);

	return (
		<ul>
			{
				books.map((book) => {
					return (
						<li key={book.id}>
							<p>{book.title}</p>
							<p>{book.author}</p>
							<p>Price: {book.price}</p>
							<button onClick={() => onAddedToCart(book.id)}>add to cart</button>
						</li>
					)
				})
			}
		</ul>
	);
}

const mapStateToProps = ({ books }) => {
	return { books };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {

	return {
		fetchBooks: fetchBooks(bookstoreService, dispatch),
		onAddedToCart: (id) => dispatch(bookAddedToCart(id))
	};
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(Items);
