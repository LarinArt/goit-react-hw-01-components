import { Section } from 'components/SectionStyle';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ user }) => {
    return (
        <Section>
            <div className={css.container}>
                <img className={css.avatar} src={user.avatar} alt={user.username} />
                <p className={css.username}>{user.username}</p>
                <p className={css.tag}>@{user.tag}</p>
                <p className={css.location}>{user.location}</p>

                <ul className={css.list}>
                    <li className={css.item}>
                        <p className={css.label}>Followers</p>
                        <p className={css.value}>{user.stats.followers}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.label}>Views</p>
                        <p className={css.value}>{user.stats.views}</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.label}>Likes</p>
                        <p className={css.value}>{user.stats.likes}</p>
                    </li>
                </ul>
            </div>
        </Section>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.isRequired,
        }),
    }).isRequired,
};
