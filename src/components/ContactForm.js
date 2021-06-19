const ContactForm = ({ name, number, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input value={name} onChange={onChange('name')} />
      </label>
      <label>
        Number
        <input value={number} onChange={onChange('number')} />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

/*const ContactForm = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input name="contactName" />
      </label>
      <label>
        Number
        <input name="contactNumber" />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};*/

export default ContactForm;
