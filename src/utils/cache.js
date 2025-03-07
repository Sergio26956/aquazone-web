const cache = new Map();

export function setCache(key, data, ttl = 3600) {
  cache.set(key, { data, expires: Date.now() + ttl * 1000 });
}

export function getCache(key) {
  const item = cache.get(key);
  if (!item || Date.now() > item.expires) return null;
  return item.data;
}

export function clearCache() {
  cache.clear();
}
