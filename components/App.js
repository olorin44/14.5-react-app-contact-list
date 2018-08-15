// var contacts = [
// 	{
// 	id: 1,
// 	firstName: 'Jan',
// 	lastName: 'Nowak',
// 	email: 'jan.nowak@example.com',
// 	},
// 	{
// 	id: 2,
// 	firstName: 'Adam',
// 	lastName: 'Kowalski',
// 	email: 'adam.kowalski@example.com',
// 	},
// 	{
// 	id: 3,
// 	firstName: 'Zbigniew',
// 	lastName: 'Koziol',
// 	email: 'zbigniew.koziol@example.com',
// 	}
// ];

// var contactForm = {
// 	firstName: '',
// 	lastName: '',
// 	email: ''
// };

// var App = React.createClass({

// 	getInitialState: function() {
// 		return {
// 			contacts: contacts,
// 			contact: contactForm,
// 		};
// 	},

// 	addContact: function({firstName, lastName, email}) {
// 		var newContact = {
// 			id: this.state.contacts.length + 1,
// 			firstName: firstName,
// 			lastName: lastName,
// 			email: email
// 		};

// 		this.setState(previousList => ({
// 			newContact: previousList.contacts.push(newContact),
// 			firstName: '',
// 			lastName: '',
// 			email: ''
// 		}));
// 	},

// 	render: function() {
// 		return (
// 			React.createElement('div', {className: 'app'},
// 				React.createElement(ContactForm, {
// 					contact: contactForm,
// 					addContact: this.addContact,
// 				}),
// 				React.createElement(Contacts, {items: contacts}, {})
// 				)
// 			);
// 	}
// });

///////////////////testy////////////////////////
var contacts = [
	{
	id: 1,
	firstName: 'Jan',
	lastName: 'Nowak',
	email: 'jan.nowak@example.com',
	},
	{
	id: 2,
	firstName: 'Adam',
	lastName: 'Kowalski',
	email: 'adam.kowalski@example.com',
	},
	{
	id: 3,
	firstName: 'Zbigniew',
	lastName: 'Koziol',
	email: 'zbigniew.koziol@example.com',
	}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};

var App = React.createClass({

	getInitialState: function() {
		return {
			contacts: contacts,
			contact: contactForm,
		};
	},

	addContact: function({firstName, lastName, email}) {
		var newContact = {
			id: this.state.contacts.length + 1,
			firstName: firstName,
			lastName: lastName,
			email: email
		};

		this.setState((prevState) => {
			console.log(newContact);
			console.log(prevState.contacts);
			contacts: prevState.contacts + newContact;
			// contacts: prevState.contacts.push(newContact);
		});
	},

	render: function() {
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(ContactForm, {
					contact: contactForm,
					addContact: this.addContact,
				}),
				React.createElement(Contacts, {items: contacts}, {})
				)
			);
	}
});
