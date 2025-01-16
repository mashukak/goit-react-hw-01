import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

const TableHeader = ({ children }) => <div className="table-header">{children}</div>;
const TableRow = ({ children, className }) => <div className={`table-row ${className}`}>{children}</div>;
const TableCell = ({ children }) => <div className="table-cell">{children}</div>;

const TransactionHistory = ({ items }) => {
  return (
    <div className="transaction-history">
      <TableHeader>
        <TableCell>Type</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Currency</TableCell>
      </TableHeader>
      {items.map(({ id, type, amount, currency }, index) => (
        <TableRow key={id} className={index % 2 === 0 ? 'even' : 'odd'}>
          <TableCell>{type}</TableCell>
          <TableCell>{amount}</TableCell>
          <TableCell>{currency}</TableCell>
        </TableRow>
      ))}
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
