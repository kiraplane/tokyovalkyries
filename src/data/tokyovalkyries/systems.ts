import type { SystemEntry } from './types';

export const attributes: SystemEntry[] = [
  {
    name: 'Resolve',
    description:
      "One of the four card and character attributes. Matching Resolve icons determine which party members repeat a Resolve card's action.",
    advice:
      'Count matching icons before committing to a card. The same card can become dramatically stronger in a party stacked toward its attribute.',
    color: '#ff4f8b',
  },
  {
    name: 'Courage',
    description:
      'One of the four action channels used by characters and cards. Its real value depends on the exact cards in the run and the matching icons in the current party.',
    advice:
      'Judge Courage cards by what they solve now: damage, defense, setup, or tempo. Do not take a card merely because its rarity is higher.',
    color: '#ffb84d',
  },
  {
    name: 'Hope',
    description:
      'One of the four attributes that connects deck construction to party composition. A played card can trigger once for each matching character attribute.',
    advice:
      'Avoid spreading the deck across every color without a reason. A smaller number of reliable attribute lanes makes the draw pile more predictable.',
    color: '#62e6a7',
  },
  {
    name: 'Dawn',
    description:
      'The fourth attribute in Tokyo Valkyries. Like the others, it is both a deck-building signal and a multiplier for who acts when a card is played.',
    advice:
      "Before adding Dawn cards, verify the party can trigger them often enough and that the effect protects or advances the run's actual plan.",
    color: '#8d7cff',
  },
];

export const routeNodes: SystemEntry[] = [
  {
    name: 'Battle',
    description:
      'A regular enemy encounter and the safest source of routine rewards.',
    advice:
      'Use normal battles to test whether the deck can defend the correct target without spending emergency items.',
    color: '#ff4f8b',
  },
  {
    name: 'Elite',
    description: 'A stronger fight with a larger risk-and-reward swing.',
    advice:
      'Enter only when current health, defense coverage, and draw quality can absorb a bad opening hand.',
    color: '#ffb84d',
  },
  {
    name: 'Shop',
    description: 'A place to spend coins on cards and items.',
    advice:
      'Buy a missing answer or a card that sharpens the deck. More cards are not automatically more power.',
    color: '#ffd166',
  },
  {
    name: 'Cafe',
    description: 'A recovery and card-improvement stop.',
    advice:
      'Treat health as route currency. Upgrade only when the party can safely reach the next recovery point.',
    color: '#62e6a7',
  },
  {
    name: 'Locker',
    description: 'A random card or item opportunity.',
    advice:
      'Take the value when the deck is flexible, but do not let a random reward pull the build away from its main attributes.',
    color: '#54e7ff',
  },
  {
    name: 'Anomaly',
    description:
      'A variable event whose outcome may change resources or the run.',
    advice:
      'Choose for the current run, not curiosity alone. A strong long-term reward is worthless if the next fight ends the attempt.',
    color: '#8d7cff',
  },
  {
    name: 'Boss',
    description:
      'The defender of a Cursed Sword and the endpoint of the current Underworld route.',
    advice:
      'Arrive with a compact deck, a defense plan for each party member, and enough health to survive an awkward first cycle.',
    color: '#ff4fd8',
  },
];
