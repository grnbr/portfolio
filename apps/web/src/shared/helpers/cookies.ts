import { CookieKeys, CookieKeysMap } from '../constants/cookies';

type CookieValue<K extends CookieKeys> =
  (typeof CookieKeysMap)[K]['values'][number];

type CookieOptions = {
  domain?: string;
  expires?: Date;
  maxAge?: number;
  path?: string;
  sameSite?: 'Lax' | 'None' | 'Strict';
  secure?: boolean;
};

export const getCookie = <K extends CookieKeys>(
  key: K,
): CookieValue<K> | undefined => {
  const name = CookieKeysMap[key].key;

  const raw = document.cookie
    .split('; ')
    .find((r) => r.startsWith(`${name}=`))
    ?.slice(name.length + 1);

  const decoded = raw ? decodeURIComponent(raw) : undefined;

  return parseCookie(key, decoded);
};

export const setCookie = <K extends CookieKeys>(
  key: K,
  value: CookieValue<K>,
  options?: CookieOptions,
): void => {
  const name = CookieKeysMap[key].key;

  const defaultOptions: CookieOptions = {
    maxAge: 31536000,
    path: '/',
  };

  const finalOptions = { ...defaultOptions, ...options };

  const parts: string[] = [`${name}=${encodeURIComponent(value)}`];

  if (finalOptions.maxAge !== undefined) {
    parts.push(`max-age=${finalOptions.maxAge}`);
  }

  if (finalOptions.expires) {
    parts.push(`expires=${finalOptions.expires.toUTCString()}`);
  }

  if (finalOptions.path) {
    parts.push(`path=${finalOptions.path}`);
  }

  if (finalOptions.domain) {
    parts.push(`domain=${finalOptions.domain}`);
  }

  if (finalOptions.secure) {
    parts.push('secure');
  }

  if (finalOptions.sameSite) {
    parts.push(`SameSite=${finalOptions.sameSite}`);
  }

  document.cookie = parts.join('; ');
};

function parseCookie<K extends CookieKeys>(
  key: K,
  raw: string | undefined,
): CookieValue<K> | undefined {
  if (!raw) return undefined;

  return (CookieKeysMap[key].values as readonly string[]).includes(raw)
    ? (raw as CookieValue<K>)
    : undefined;
}
