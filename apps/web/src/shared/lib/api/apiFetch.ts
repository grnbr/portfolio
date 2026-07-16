// apps/web/lib/apiFetch.ts
export type ApiFetchProps = {
  baseURL: string;
  body?: unknown;
  endpoint: string;
  headers?: HeadersInit;
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT';
};
export type ApiSuccess<T> = { data: T; ok: true };
export type ApiError<U> = { error: U; ok: false };
export type ApiResponse<T, U> = ApiError<U> | ApiSuccess<T>;

export const apiFetch = async <T, U = { error: string }>({
  baseURL,
  body,
  endpoint,
  headers,
  method = 'GET',
}: ApiFetchProps): Promise<ApiResponse<T, U>> => {
  const res = await fetch(`${baseURL}${endpoint}`, {
    body: body ? JSON.stringify(body) : undefined,
    headers: { 'Content-Type': 'application/json', ...headers },
    method,
  });
  const json = await res.json();
  if (!res.ok) return { error: json as U, ok: false };
  return { data: json as T, ok: true };
};
