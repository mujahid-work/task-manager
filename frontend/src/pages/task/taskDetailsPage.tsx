import React from 'react';
import { useParams } from 'react-router-dom';

import { useTaskDetail } from '../../hooks/task/useTaskDetail';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import Card from '../../components/card/Card';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const taskId = parseInt(id || '', 10);
  const { task, loading, error } = useTaskDetail(taskId);

  if (loading) return <div className="container mt-4"><div className="text-center">Loading task details...</div></div>;
  if (error) return <ErrorMessage message={error} />;
  if (!task) return <ErrorMessage message="Task not found." />;

  return (
    <main className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card
            title={task.title}
            subtitle={`ID: ${task.id}`}
          >
            <p>{task.description}</p>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;