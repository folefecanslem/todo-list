import React from 'react';

interface HistoryProps {
  history: { id: number; text: string; deadline?: Date }[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div>
      <h2>Deleted Todo Items</h2>
      {history.length === 0 ? (
        <p>No deleted items</p>
      ) : (
        <ul>
          {history.map(item => (
            <li key={item.id}>
              {item.text} {item.deadline ? `(Deadline: ${item.deadline.toLocaleString()})` : ''}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;