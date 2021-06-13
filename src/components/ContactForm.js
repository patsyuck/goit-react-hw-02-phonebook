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

export default ContactForm;
