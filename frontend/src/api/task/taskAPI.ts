import { TaskProps } from "../../types/task/Task";

const BASE_URL = 'http://localhost:8000';

export const getTasks = async (): Promise<TaskProps[]> => {
  const response = await fetch(`${BASE_URL}/tasks`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Something went wrong while fetching tasks. Please try again later!');
  }
  return response.json();
};

export const getTaskById = async (id: number): Promise<TaskProps> => {
  const response = await fetch(`${BASE_URL}/tasks/${id}`);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Something went wrong while fetching the task details. Please try again later!');
  }
  return response.json();
};