let days = [
  {
    day: 'saturday',
    task: [
      { taskName: 'رفتن به باشگاه', taskTime: 1800, isDone: false },
      { taskName: 'رفتن به آرایشگاه', taskTime: 1000, isDone: false },
      { taskName: 'پرداخت قسط وام مسکن', taskTime: 800, isDone: true },
    ],
  },
  {
    day: 'sunday',
    task: [
      { taskName: 'خرید مایحتاج خانه', taskTime: 900, isDone: true },
      { taskName: 'تولد مجید', taskTime: 2000, isDone: false },
      { taskName: 'تمرین مکتب', taskTime: 1600, isDone: true },
    ],
  },
  {
    day: 'monday',
    task: [
      { taskName: 'بازی فوتسال', taskTime: 1800, isDone: false },
      { taskName: 'قسمت جدید house of dragons', taskTime: 2200, isDone: false },
      { taskName: 'دوچرخه سواری', taskTime: 700, isDone: true },
    ],
  },
  {
    day: 'tuesday',
    task: [
      { taskName: ' دیت', taskTime: 1800, isDone: true },
      { taskName: ' خواب ظهر', taskTime: 1400, isDone: true },
      { taskName: 'پارتی', taskTime: 2200, isDone: false },
      { taskName: ' خواب شب', taskTime: 400, isDone: false },
    ],
  },

  {
    day: 'wednesday',
    task: [
      { taskName: 'بازی فوتسال', taskTime: 1600, isDone: true },
      { taskName: 'قسمت جدید rick and morty', taskTime: 2200, isDone: false },
      { taskName: 'باشگاه', taskTime: 900, isDone: true },
    ],
  },
  {
    day: 'thursday',
    task: [{ taskName: 'تابیدن ', taskTime: 2100, isDone: false }],
  },
  {
    day: 'friday',
    task: [{ taskName: 'لهو و لعب', taskTime: 1800, isDone: false }],
  },
];

let userData = {
  name: '',
  lastName: '',
  phoneNumber: '',
};

let login = document.querySelector('.login-modal');
let main = document.querySelector('.main');
let edit = document.querySelector('.edit-modal');
let entreButton = document.querySelector('.enter');
let firstName = document.querySelector('#name');
let lastName = document.querySelector('#lastName');
let phone = document.querySelector('#phone');
let hiUser = document.querySelector('#hiUser');

entreButton.addEventListener('click', () => {
  let phoneIsValid =
    phone.value.length === 11 && phone.value.slice(0, 2) == '09';
  if (firstName.value && lastName.value && phoneIsValid) {
    userData.name = firstName.value;
    userData.lastName = lastName.value;
    userData.phoneNumber = phone.value;
    login.classList.toggle('hidden');
    main.classList.toggle('is-blurred');
    hiUser.textContent = `سلام ` + userData.name;
  } else {
    alert('failed to login(wrong input value)');
  }
});
