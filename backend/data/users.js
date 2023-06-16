import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin Bartosz',
    email: 'barwar000@pbs.edu.pl',
    password: bcrypt.hashSync('haslo123', 10), //haszowanie moze isc do 20 wiec to jest zloty srodek miedzy wydajnoscia a bezpieczenstwem
    isAdmin: true,
  },
  {
    name: 'Janusz Kowalski',
    email: 'janusz@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Grazyna Kowalska',
    email: 'grazyna@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;