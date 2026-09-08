// Central place the rest of the app pulls category content from.
// Edit the JSON files in /content/categories to change what appears on
// the site — nothing in src/ needs to change for a content update.

import car from '../../../content/categories/car.json';
import home from '../../../content/categories/home.json';
import pet from '../../../content/categories/pet.json';
import life from '../../../content/categories/life.json';
import travel from '../../../content/categories/travel.json';

export const categories = [car, home, pet, life, travel];

export function getCategory(id) {
  return categories.find((c) => c.id === id);
}
