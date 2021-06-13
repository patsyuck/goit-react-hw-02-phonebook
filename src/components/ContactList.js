import ContactItem from './ContactItem';

const ContactList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <ContactItem
          key={friend.id}
          name={friend.name}
          number={friend.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
