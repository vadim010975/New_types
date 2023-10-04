import Cart from './Cart';

const cart = new Cart;
cart.add({
  title: 'Мстители',
  year: 2012,
  country: 'США',
  tagline: '"Avengers Assenble!"',
  genre: ['драма', 'фэнтези', 'криминал'],
  duration: '137 мин. / 02:17',
});
cart.add({
  title: 'Зеленая миля',
  year: 1999,
  country: 'США',
  tagline: '"Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них"',
  genre: ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  duration: '189 мин. / 03:09',
});

console.log(cart.items);
