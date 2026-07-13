import { buildApiProps, buildApiUrl } from '@/shared/lib/api/apiProxy';

export async function POST(request: Request) {
  const url = buildApiUrl({ request });
  const options = await buildApiProps(request);
  const res = await fetch(url, options);
  const data = await res.json();

  if (!res.ok) {
    return Response.json(data, { status: res.status });
  }

  const response = Response.json({ success: true });
  const setCookie = res.headers.get('set-cookie');
  if (setCookie) {
    response.headers.set('set-cookie', setCookie);
  }

  return response;
}
