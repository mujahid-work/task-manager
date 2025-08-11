import React from 'react';
import { useParams } from 'react-router-dom';

import { useTaskDetail } from '../../hooks/task/useTaskDetail';
import ErrorMessage from '../../components/error-message/ErrorMessage';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const taskId = parseInt(id || '', 10);
  const { task, loading, error } = useTaskDetail(taskId);

  if (loading) return <div>Loading task details...</div>;
  if (error) return <ErrorMessage message={error} />;
  if (!task) return <ErrorMessage message="Task not found." />;

  return (
    <main>
      <article>
        <div>
          <strong>Task ID:</strong> {task.id}
        </div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </article>
    </main>
  );
};

export default DetailPage;