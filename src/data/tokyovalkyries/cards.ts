export const cardAttributes = [
  'Resolve',
  'Courage',
  'Hope',
  'Dawn',
  'Other',
] as const;

export const cardTypes = ['Attack', 'Support'] as const;

export type CardAttribute = (typeof cardAttributes)[number];
export type CardType = (typeof cardTypes)[number];

export interface TokyoValkyriesCard {
  id: string;
  name: string;
  cost: number;
  type: CardType;
  attribute: CardAttribute;
  image: string;
  effectLines: string[];
  keywords: string[];
  roles: Array<'Damage' | 'Defense' | 'Setup' | 'Control' | 'Flexible'>;
  internalEvidence: {
    asset: string;
    checkedAt: string;
    confidence: 'high' | 'medium';
  };
}

export const cards: TokyoValkyriesCard[] = [
  {
    id: 'dash-thrust',
    name: 'Dash Thrust',
    cost: 1,
    type: 'Attack',
    attribute: 'Resolve',
    image: '/tokyovalkyries/cards/dash-thrust.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Damage'],
    internalEvidence: {
      asset: 'battle-card-frame-00',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'parry',
    name: 'Parry',
    cost: 1,
    type: 'Support',
    attribute: 'Resolve',
    image: '/tokyovalkyries/cards/parry.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Defense'],
    internalEvidence: {
      asset: 'shop-card-frame-11',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'squeeze-out',
    name: 'Squeeze Out',
    cost: 1,
    type: 'Support',
    attribute: 'Other',
    image: '/tokyovalkyries/cards/squeeze-out.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Setup'],
    internalEvidence: {
      asset: 'shop-card-frame-11',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'as-i-please',
    name: 'As I Please',
    cost: 2,
    type: 'Attack',
    attribute: 'Other',
    image: '/tokyovalkyries/cards/as-i-please.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Damage'],
    internalEvidence: {
      asset: 'shop-card-frame-11',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'barbed-wire',
    name: 'Barbed Wire',
    cost: 2,
    type: 'Support',
    attribute: 'Other',
    image: '/tokyovalkyries/cards/barbed-wire.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Control'],
    internalEvidence: {
      asset: 'shop-card-frame-11',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'kuji-in-cut',
    name: 'Kuji-in Cut',
    cost: 2,
    type: 'Attack',
    attribute: 'Resolve',
    image: '/tokyovalkyries/cards/kuji-in-cut.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Damage'],
    internalEvidence: {
      asset: 'shop-card-frame-11',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'skull-crush',
    name: 'Skull Crush',
    cost: 2,
    type: 'Attack',
    attribute: 'Resolve',
    image: '/tokyovalkyries/cards/skull-crush.jpg',
    effectLines: ['12 damage', '1 Fracture', '1 Resolve'],
    keywords: ['Fracture', 'Resolve'],
    roles: ['Damage', 'Control'],
    internalEvidence: {
      asset: 'reward-detail-frame-12',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'stance-of-heaven-and-earth',
    name: 'Stance of Heaven + Earth',
    cost: 2,
    type: 'Attack',
    attribute: 'Resolve',
    image: '/tokyovalkyries/cards/stance-of-heaven-and-earth.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Damage'],
    internalEvidence: {
      asset: 'reward-card-frame-12',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'to-protect-that-smile',
    name: 'To Protect That Smile',
    cost: 2,
    type: 'Support',
    attribute: 'Resolve',
    image: '/tokyovalkyries/cards/to-protect-that-smile.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Defense'],
    internalEvidence: {
      asset: 'shop-card-frame-11',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
  {
    id: 'destroy-slash',
    name: 'Destroy Slash',
    cost: 3,
    type: 'Attack',
    attribute: 'Resolve',
    image: '/tokyovalkyries/cards/destroy-slash.jpg',
    effectLines: [],
    keywords: [],
    roles: ['Damage'],
    internalEvidence: {
      asset: 'shop-card-frame-11',
      checkedAt: '2026-08-20',
      confidence: 'high',
    },
  },
];

export const cardsById = Object.fromEntries(
  cards.map((card) => [card.id, card])
) as Record<string, TokyoValkyriesCard>;

export const cardsCheckedAt = '2026-07-11';
