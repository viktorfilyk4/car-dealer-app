export const fetcher = async <T>(url: string) => {
  try {
    const response = await fetch(url);
    if (!(response.ok && response.status === 200)) {
      return false;
    }
    return (await response.json()) as T;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};
