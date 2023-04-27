interface UsersTypeArray {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
}

const users: UsersTypeArray[] = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
    age: 23
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
    age: 20
  },
  {
    id: 9,
    email: 'tobias.funke@reqres.in',
    first_name: 'Tobias',
    last_name: 'Funke',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    age: 40
  },
  {
    id: 10,
    email: 'byron.fields@reqres.in',
    first_name: 'Byron',
    last_name: 'Fields',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
    age: 36
  },
  {
    id: 11,
    email: 'george.edwards@reqres.in',
    first_name: 'George',
    last_name: 'Edwards',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
    age: 70
  },
  {
    id: 12,
    email: 'rachel.howell@reqres.in',
    first_name: 'Rachel',
    last_name: 'Howell',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
    age: 45
  }
];

type Emails = string[];

type UserIdFName = Pick<UsersTypeArray, 'id'> & { fullname: string };

type Age = {
  gt30: number;
  gt40: number;
  gt18: number;
  avgAge: number;
};

type AlphaFilter = {
  [Leter: string]: string[];
};

//task 1

function getUserFullname(user: UsersTypeArray): string {
  return `${user.first_name} ${user.last_name}`;
}

const fullnames = users.map(getUserFullname).join(', ');
console.warn(fullnames);

//task 2

function getEmail(user: UsersTypeArray): string {
  return user.email;
}

const emails: Emails = users.map(getEmail).sort();

console.warn(emails);

//task 3

function getUserId(user: UsersTypeArray): number {
  return user.id;
}

const shortDetails: UserIdFName[] = users.map((user: UsersTypeArray) => ({
  id: getUserId(user),
  fullname: getUserFullname(user)
}));

console.warn(shortDetails);

//task 4

function getAge(user: UsersTypeArray): number {
  return user.age;
}

const youngUsers: UsersTypeArray[] = users
  .filter((user: UsersTypeArray) => getAge(user) < 40)
  .sort((a: UsersTypeArray, b: UsersTypeArray) => a.age - b.age);

console.warn(youngUsers);

//task 5

const stats: Age = users.reduce(
  (accumulator: Age, user: UsersTypeArray, index: number) => {
    if (user.age > 40) {
      accumulator.gt40 += 1;
    }
    if (user.age > 30) {
      accumulator.gt30 += 1;
    }
    if (user.age > 18) {
      accumulator.gt18 += 1;
    }
    accumulator.avgAge = (user.age + accumulator.avgAge * index) / (index + 1);
    return accumulator;
  },
  {
    gt30: 0,
    gt40: 0,
    gt18: 0,
    avgAge: 0
  }
);

console.warn(stats);
// Формула: https://habr.com/ru/company/ruvds/blog/458030/
//task 6

const getFirstLetter = (string_: string) => string_.slice(0, 1);

const reduceAlphabetStats = (users: UsersTypeArray[]) => {
  return users.reduce((accumulator: AlphaFilter, user: UsersTypeArray) => {
    const firstLetter = getFirstLetter(user.last_name);
    if (!accumulator[firstLetter]) {
      accumulator[firstLetter] = [];
    }
    accumulator[firstLetter].push(user.last_name);
    return accumulator;
  }, {});
};

const alphabetStats: AlphaFilter = reduceAlphabetStats(users);

console.warn(alphabetStats);

// Пример каррирования

// const getUsersFilter = (age) => (user) => user.age > age;

// const isPensioner = getUsersFilter(63);
// const isAdult = getUsersFilter(21);

// const pensioneers = users.filter(isPensioner);
// const adults = users.filter(isAdult);

// console.warn(pensioneers);
// console.warn(adults);
