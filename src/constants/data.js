import images from './images';

const wines = [
  {
    id: 1,
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    id: 2,
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    id: 3,
    title: 'La Vieille Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    id: 4,
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    id: 5,
    title: 'Irish Guinness',
    price: '$8',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    id: 1,
    title: 'Aperol Sprtiz',
    price: '$18',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    id: 2,
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    id: 3,
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    id: 4,
    title: 'Old Fashioned',
    price: '$18',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    id: 5,
    title: 'Negroni',
    price: '$15',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    id: 1,
    imgUrl: images.award02,
    title: 'Bib Gourmand',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 2,
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 3,
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    id: 4,
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const stats = [
  {
    id: 1,
    number: '30+',
    imgUrl: images.spoon,
    option: 'Breakfast Options'
  },
  {
    id: 2,
    number: '50',
    imgUrl: images.spoon,
    option: 'Dinner Options'
  },
  {
    id: 1,
    number: '8',
    imgUrl: images.spoon,
    option: 'New Locations'
  }
]

const testimonials = [
  {
    id: 1,
    name: 'Wade Warren',
    job: 'Sommelier',
    review: "The service and hospitality I experienced at Gericht was some of the best I've come across in all of my years. From the moment that you walk in the door, you feel special, and in a dark, cynical world, that really goes a long way.",
    imgUrl: images.wade
  },
  {
    id: 2,
    name: 'Jane Cooper',
    job: 'Chef',
    review: "As a photographer by day and chef by night, Gericht was really the perfect romantic date-night destination for me. The food was incredible and the aesthetic that they've created is something unlike anything else in the restaurant world.",
    imgUrl: images.jane
  },
  {
    id: 3,
    name: 'Robert Fox',
    job: 'Chef',
    review: "The energy you feel as soon as you walk in is incredible. It's like an excited but quiet cocophany... full of wonder at every turn. [Gericht] has an incredible ambiance.",
    imgUrl: images.robert
  },
  {
    id: 4,
    name: 'Brooklyn Simmons',
    job: 'Caterer',
    review: "The bar staff really did an incredible job of making my friends and I feel special last week when we went out for Happy Hour. I can't wait to go back again!",
    imgUrl: images.brooklyn
  }
]

const chefs = [
  {
    id: 1,
    name: 'Kevin Luo',
    position: 'Head Chef',
    imgUrl: images.kevin
  },
  {
    id: 2,
    name: 'Patrick Choi',
    position: 'Deputy Chef',
    imgUrl: images.patrick
  },
  {
    id: 3,
    name: 'Jack Biscoff',
    position: 'Station Chef',
    imgUrl: images.jack
  },
  {
    id: 4,
    name: 'Stacy Lee',
    position: 'Station Chef',
    imgUrl: images.stacy
  },
  {
    id: 5,
    name: 'Aren Goodman',
    position: 'Junior Chef',
    imgUrl: images.aren
  },
  {
    id: 6,
    name: 'Javier Dowsing',
    position: 'Junior Chef',
    imgUrl: images.javier
  }
]

export default { wines, cocktails, awards, stats, testimonials, chefs };
