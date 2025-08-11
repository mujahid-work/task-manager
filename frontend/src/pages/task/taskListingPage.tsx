import React from 'react';
import { Link } from 'react-router-dom';

import { useTasks } from '../../hooks/task/useTasks';
import ErrorMessage from '../../components/error-message/ErrorMessage';

const ListingPage: React.FC = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main>
      <h2>Tasks Listing</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/detail/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ListingPage;