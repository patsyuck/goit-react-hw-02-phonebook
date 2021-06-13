import ContactItem from './ContactItem';

const ContactList = ({ friends, filter }) => {
  return (
    <ul>
      {friends
        .filter(
          item => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0,
        )
        .map(friend => (
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
