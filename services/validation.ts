import { OrgInventory } from '../types';

// Single source of truth for requestable items -> inventory keys
export const REQUEST_ITEM_MAP: Record<string, keyof OrgInventory> = {
  'Water Cases': 'water',
  'Food Boxes': 'food',
  'Blankets': 'blankets',
  'Medical Kits': 'medicalKits',
};

export const isValidRequestItem = (item: string): item is keyof typeof REQUEST_ITEM_MAP => {
  return Object.prototype.hasOwnProperty.call(REQUEST_ITEM_MAP, item);
};
