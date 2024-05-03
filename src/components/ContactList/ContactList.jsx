import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

// import css from './ContactList.module.css';
const ContactList = () => {
	const filter = useSelector(state => state.filter);
	const contact = useSelector(state => state.contacts.items);

	const contacts = contact.filter(contact =>
		contact.name.toLowerCase().includes(filter.name.toLowerCase())
	);

	return (
		<ul>
			{contacts.map(contact => (
				<li key={contact.id}>
					<Contact contact={contact} />
				</li>
			))}
		</ul>
	);
};

export default ContactList;
