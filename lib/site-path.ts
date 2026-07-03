const basePath = process.env.NODE_ENV === "production" ? "/andys-woodworks" : "";

export function withBasePath(src: string) {
  if (!src || /^https?:\/\//.test(src)) {
    return src;
  }
  const normalized = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${normalized}`;
}
