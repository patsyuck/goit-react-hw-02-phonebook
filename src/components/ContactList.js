import ContactItem from './ContactItem';

const ContactList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <ContactItem key={friend.id} name={friend.name} />
      ))}
    </ul>
  );
};

export default ContactList;
