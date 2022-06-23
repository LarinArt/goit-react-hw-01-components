import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Section } from 'components/SectionStyle';

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const Statistics = ({ title, data }) => {
    return <Section>
        {title && <h2 className={css.title}>Upload stats</h2>}
        <ul className={css.list}>
            {data.map((item) => 
                <li className={css.item} key={item.id} style={{ backgroundColor: randomColor() }}>
                    <span>{item.label}</span>
                    <span>{item.percentage}</span>
            </li>)}
        </ul>
    </Section>
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
}