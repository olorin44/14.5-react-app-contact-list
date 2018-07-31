var ContactForm = React.createClass({
  propTypes: {
	contact: React.PropTypes.object.isRequired,
	addContact: React.PropTypes.func.isRequired,
  },


  onChange: function(event) {
	var target = event.target;
	var name = target.name;
	var value = target.value;

	this.setState ({
	  [name]: value,
	});
  },


  onSubmit: function(event) {
	event.preventDefault();
	this.props.addContact({
	  firstName: this.state.firstName,
	  lastName: this.state.lastName,
	  email: this.state.email
	});
  },

  render: function() {
	return (
		  React.createElement('form', {onSubmit: this.onSubmit, className: 'row contactForm'},
			  React.createElement('input', {
				type: 'text',
				placeholder: 'Imię',
				name: 'firstName',
				value: this.firstName,
				onChange: this.onChange,
			  }),
			  React.createElement('input', {
				type: 'text',
				placeholder: 'Nazwisko',
				name: 'lastName',
				value: this.lastName,
				onChange: this.onChange,
			  }),
			  React.createElement('input', {
				type: 'email',
				placeholder: 'Email',
				name: 'email',
				value: this.email,
				onChange: this.onChange,
			  }),
			  React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
		  )
	);
  },
});