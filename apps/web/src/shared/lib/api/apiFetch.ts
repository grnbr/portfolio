// apps/web/lib/apiFetch.ts
export type ApiFetchProps = {
  baseURL: string;
  body?: unknown;
  endpoint: string;
  headers?: HeadersInit;
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT';
};

export const apiFetch = async <T>({
  baseURL,
  body,
  endpoint,
  headers,
  method = 'GET',
}: ApiFetchProps): Promise<T> => {
  const res = await fetch(`${baseURL}${endpoint}`, {
    body: body ? JSON.stringify(body) : undefined,
    headers: { 'Content-Type': 'application/json', ...headers },
    method,
  });

  const json = (await res.json()) as T;

  if (!res.ok) throw json;

  return json;
};
