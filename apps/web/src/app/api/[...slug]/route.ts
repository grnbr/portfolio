import { buildApiProps, buildApiUrl } from '@/shared/lib/api/apiProxy';

async function handleRequest(request: Request) {
  const url = buildApiUrl({ request });
  const options = await buildApiProps(request);
  const res = await fetch(url, options);
  const data: unknown = await res.json();
  return Response.json(data, { status: res.status });
}

export const POST = handleRequest;
