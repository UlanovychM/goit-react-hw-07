import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { useId } from 'react';
import { Input, Label } from './SearchBox.styled';

const SearchBar = () => {
	const dispatch = useDispatch();
	const value = useSelector(state => state.filter.name);
	const searchId = useId();

	return (
		<>
			<Label htmlFor={searchId}>
				<span>Find contacts by name</span>
			</Label>
			<Input
				value={value}
				id={searchId}
				type='text'
				name='search'
				onChange={e => dispatch(changeFilter(e.target.value.trim()))}
			/>
		</>
	);
};

export default SearchBar;
