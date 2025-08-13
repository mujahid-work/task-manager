import { useEffect, useState } from 'react';

import { getTaskById } from '../../api/task/taskAPI';
import { TaskProps } from '../../types/task/Task';

export const useTaskDetail = (id: number) => {
  const [task, setTask] = useState<TaskProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTaskById(id)
      .then(setTask)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { task, loading, error };
};