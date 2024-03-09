export async function simulateFetch<T>(data: T, delay: number): Promise<T> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

export const simulatedData = { message: 'User Created' };
