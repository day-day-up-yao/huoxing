import replace from 'lodash/replace';

function removeNonLetters(input?: string | null): string | null {
  if (!input) return null;
  return replace(input, /[^a-zA-Z]/g, '');
}

export { removeNonLetters };
