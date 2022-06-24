import { Section } from "components/SectionStyle";
import PropTypes from 'prop-types';
import css from './TransactionHistoryStyle.module.css';

export const TransactionHistory = ({ items }) => {
    return <Section>
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.tableHeader}>Type</th>
                    <th className={css.tableHeader}>Amount</th>
                    <th className={css.tableHeader}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({id, type, amount, currency}) =>
                    <tr className={css.tableString} key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </Section>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })).isRequired
}
