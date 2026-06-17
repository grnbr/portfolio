const API_URL = process.env.API_URL || 'http://localhost:4000';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(`${API_URL}/login`, {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json(
        { error: data.error ?? 'Request failed' },
        { status: res.status },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
