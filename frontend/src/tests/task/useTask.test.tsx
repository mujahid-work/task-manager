import { renderHook, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useTasks } from '../../hooks/task/useTasks';

// Mock fetch before each test
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, title: 'Test Task', description: 'Test Description' }]),
    })
  ) as jest.Mock;
});

// Clean up after each test
afterEach(() => {
  jest.restoreAllMocks();
});

describe('useTasks Hook', () => {
  it('fetches tasks successfully', async () => {
    const { result } = renderHook(() => useTasks());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.tasks.length).toBeGreaterThan(0);
    expect(result.current.tasks[0]).toEqual({
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
    });
    expect(result.current.error).toBeNull();
  });

  it('handles initial loading state', () => {
    const { result } = renderHook(() => useTasks());

    expect(result.current.loading).toBe(true);
    expect(result.current.tasks).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it('handles fetch error', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Network error'))) as jest.Mock;

    const { result } = renderHook(() => useTasks());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.tasks).toEqual([]);
    expect(result.current.error).toBe('Network error');
  });
});
