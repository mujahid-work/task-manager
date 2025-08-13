import { useEffect, useState } from 'react';

import { getTasks } from '../../api/task/taskAPI';
import { TaskProps } from '../../types/task/Task';

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTasks()
      .then(setTasks)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { tasks, loading, error };
};