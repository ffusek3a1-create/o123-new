export function preventPolishOrphans(text: string) {
  return text.replace(
    /(^|\s)(i|a|o|u|w|z|na|do|od|po|za|we|ze)\s/gi,
    "$1$2\u00A0",
  );
}