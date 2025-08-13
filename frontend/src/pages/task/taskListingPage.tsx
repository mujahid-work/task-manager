import React from 'react';
import { Link } from 'react-router-dom';

import { useTasks } from '../../hooks/task/useTasks';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import Card from '../../components/card/Card';

const ListingPage: React.FC = () => {
  const { tasks, loading, error } = useTasks();

  if (loading) return <div className="container mt-4"><div className="text-center">Loading tasks...</div></div>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <main className="container mt-4">
      <h2 className="mb-4">Tasks Listing</h2>
      <div className="row">
        {tasks.map((task) => (
          <div key={task.id} className="col-md-4 mb-3">
            <Card
              title={task.title}
              footer={
                <Link to={`/detail/${task.id}`} className="btn btn-primary">
                  View Details
                </Link>
              }
            >
              <p>{task.description}</p>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ListingPage;