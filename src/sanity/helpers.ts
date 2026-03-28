/**
 * Split a text field into paragraphs (separated by blank lines).
 * Returns the fallback array if text is empty/null.
 */
export function splitParagraphs(
  text: string | null | undefined,
  fallback: string[]
): string[] {
  if (!text) return fallback;
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  return paragraphs.length > 0 ? paragraphs : fallback;
}
