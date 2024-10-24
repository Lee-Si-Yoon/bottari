const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
};
const unescapeMap = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#x27;': "'",
  '&#x60;': '`',
};

const createEscaper = (map: Record<string, string>) => {
  const matcher = (match: string) => {
    return `${map[match]}`;
  };

  const source = '(?:' + Object.keys(map).join('|') + ')';
  const testRegexp = RegExp(source);
  const replaceRegexp = RegExp(source, 'g');

  const escaper = (string: unknown) => {
    const string2 = `${string}`;

    return testRegexp.test(string2)
      ? string2.replace(replaceRegexp, matcher)
      : string2;
  };

  return escaper;
};

const escapeHtml = createEscaper(escapeMap);
const unescapeHtml = createEscaper(unescapeMap);

export { escapeHtml, unescapeHtml };
