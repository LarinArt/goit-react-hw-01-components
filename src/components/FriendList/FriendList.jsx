import { Section } from 'components/SectionStyle';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import friends from 'data/friends.json'

export const FriendList = () => {
  return (
    <Section>
      <ul className={css.list}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <span
              className={friend.isOnline ? css.status__true : css.status__false}
            ></span>
            <img src={friend.avatar} alt={friend.name} width="48" />
            <p>{friend.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  )
};
