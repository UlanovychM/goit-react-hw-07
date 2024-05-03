import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />

			<ToastContainer position='top-center' />
		</div>
	);
}

export default App;
