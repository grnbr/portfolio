const API_URL = process.env.API_URL || 'http://localhost:4000';

export async function buildApiProps(
  request: Request,
  extraHeaders?: HeadersInit,
): Promise<RequestInit> {
  const contentType = request.headers.get('Content-Type') ?? 'application/json';
  const body =
    request.method !== 'GET' && request.method !== 'HEAD'
      ? await request.text()
      : undefined;
  return {
    body,
    headers: { 'Content-Type': contentType, ...extraHeaders },
    method: request.method,
  };
}

export function buildApiUrl({ request }: { request: Request }): string {
  const { pathname, search } = new URL(request.url);
  const result = `${API_URL}${pathname}${search}`;

  return result;
}
