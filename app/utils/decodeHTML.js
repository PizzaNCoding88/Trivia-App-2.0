export function decodeHtml(string) {
  const text = document.createElement("textarea");
  text.innerHTML = string;
  return text.value;
}
