import { ContactFormData } from './Form';

export default function EmailTemplate({
  formData,
}: {
  formData: ContactFormData;
}) {
  const { email, message, name, subject } = formData;

  return (
    <div
      style={{ fontFamily: 'sans-serif', margin: '0 auto', maxWidth: '600px' }}
    >
      <h2 style={{ borderBottom: '1px solid #eee', paddingBottom: '12px' }}>
        New message from your portfolio
      </h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tr>
          <td style={{ fontWeight: 'bold', padding: '8px 0', width: '80px' }}>
            From:
          </td>
          <td>
            {name || 'Anonymous'} ({email})
          </td>
        </tr>
        {subject && (
          <tr>
            <td style={{ fontWeight: 'bold', padding: '8px 0' }}>Subject:</td>
            <td>{subject}</td>
          </tr>
        )}
        <tr>
          <td
            style={{
              fontWeight: 'bold',
              padding: '8px 0',
              verticalAlign: 'top',
            }}
          >
            Message:
          </td>
          <td style={{ padding: '8px 0' }}>{message}</td>
        </tr>
      </table>
    </div>
  );
}
