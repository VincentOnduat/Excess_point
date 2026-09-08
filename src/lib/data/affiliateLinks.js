import links from '../content/affiliate-links.json';

/** @typedef {{ program: string, url: string }} AffiliateLink */

/** @type {Record<string, AffiliateLink>} */
const linksById = /** @type {any} */ (links);

/** @param {string} categoryId */
export function getAffiliateLink(categoryId) {
  return linksById[categoryId] ?? { program: '', url: '' };
}
