import { zip, pipe, flat, reduce, map, concat } from '@fxts/core';
import { escapeHtml } from './escapeHtml';

/**
 * Returns tagged temperate literals
 * Escapes html
 * Nesting is supported
 *
 * @example
 * const a = 'a';
 * const b = '<script>';
 * const c = '<img onload="" />';
 *
 * const result = html`
 *   <ul>
 *     <li>${a}</li>
 *     <li>
 *       ${html`
 *         <ul>
 *           ${[a, b, c].map((v) => html`<li>${v}</li>`)}
 *         </ul>
 *        `}
 *     </li>
 *  </ul>
 * `;
 *
 * console.log(result.toHtml());
 */
export const html = (strings: TemplateStringsArray, ...values: unknown[]) =>
  new Tmpl(strings, values);

const joinTT = <T>(
  strings: TemplateStringsArray,
  values: T[],
  f: (value: T) => string,
) =>
  pipe(
    zip(strings, concat(map(f, values), [''])),
    flat,
    reduce((a, b) => a + b),
  );

export class Tmpl {
  constructor(
    private strings: TemplateStringsArray,
    private values: unknown[],
  ) {}

  private _merge = (value: unknown) =>
    Array.isArray(value) ? value.reduce((a, b) => html`${a}${b}`) : value;

  private _escapeHtml = (value: unknown): string =>
    value instanceof Tmpl ? value.toHtml() : escapeHtml(value);

  toHtml() {
    return joinTT(this.strings, this.values, (v) =>
      this._escapeHtml(this._merge(v)),
    );
  }
}

/**
 * Applies uppercase to temperate literal
 *
 * @example
 * console.log(upper`A${`<script/>`}b${`<image onload="">`}`);
 */
export const upper = (strings: TemplateStringsArray, ...values: string[]) =>
  joinTT(strings, values, (v) => v.toUpperCase());
