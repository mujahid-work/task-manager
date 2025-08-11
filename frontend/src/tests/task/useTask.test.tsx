import { renderHook } from '@testing-library/react';
import { useTasks } from '../../hooks/task/useTasks';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: 'Test', description: 'Body' }]),
  })
) as jest.Mock;

test('useTasks fetches tasks', async () => {
  const { result } = renderHook(() => useTasks());
  await import('@testing-library/react').then(({ waitFor }) => waitFor(() => expect(result.current.tasks.length).toBeGreaterThan(0)));
  expect(result.current.tasks.length).toBeGreaterThan(0);
  expect(result.current.error).toBeNull();
});