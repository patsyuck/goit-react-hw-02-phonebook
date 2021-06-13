const ContactForm = ({ name, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input value={name} onChange={onChange} />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
