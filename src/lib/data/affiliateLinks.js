import links from '../../../content/affiliate-links.json';

/** @param {string} categoryId */
export function getAffiliateLink(categoryId) {
  return links[categoryId] ?? { program: '', url: '' };
}
