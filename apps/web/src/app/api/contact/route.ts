export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const { email, message, name, subject } = formData;

    const text = `
📩 New Portfolio Message

👤 Name: ${name}
📧 Email: ${email}
📝 Subject: ${subject}

💬 Message:
${message}
    `;

    const res = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          parse_mode: 'HTML',
          text,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    );

    const data = await res.json();

    if (!data.ok) {
      console.error(data);
      return Response.json({ error: data.description }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
