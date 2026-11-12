
interface RetryOptions {
  attempts?: number;
  delay?: number;
  backoff?: number;
}

export const retry = async <T>(
  operation: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> => {
  const {
    attempts = 3,
    delay = 1000,
    backoff = 2,
  } = options;

  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (attempt === attempts) {
        break;
      }

      const waitTime = delay * Math.pow(backoff, attempt - 1);

      await new Promise((resolve) =>
        setTimeout(resolve, waitTime)
      );
    }
  }

  throw lastError;
};
