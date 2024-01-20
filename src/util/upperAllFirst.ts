export default function upperAllFirst(str: string | null | undefined): string {
  if (!str) return "";
  
  const regex = /(\b[a-z](?!\s))/g;
  return str.replace(regex, function (x) {
    return x.toUpperCase();
  });
}
