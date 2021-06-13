const ContactItem = ({ key, name, number }) => {
  return (
    <li key={key}>
      {name}: {number}
    </li>
  );
};

export default ContactItem;
