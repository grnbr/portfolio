import { CookieKeys, CookieKeysMap } from '../constants/cookies';

type CookieValue<K extends CookieKeys> =
  (typeof CookieKeysMap)[K]['values'][number];

export const getCookie = <K extends CookieKeys>(
  key: K,
): CookieValue<K> | undefined => {
  const name = CookieKeysMap[key]['key'];
  const raw = document.cookie
    .split('; ')
    .find((r) => r.startsWith(`${name}=`))
    ?.split('=')[1];
  return parseCookie(key, raw);
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
