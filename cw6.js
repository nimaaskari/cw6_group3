let days = [
  {
    day: 'saturday',
    task: [
      { taskName: 'رفتن به باشگاه', taskTime: '1800', isDone: false },
      { taskName: 'رفتن به آرایشگاه', taskTime: '1000', isDone: false },
      { taskName: 'پرداخت قسط وام مسکن', taskTime: '0800', isDone: true },
    ],
  },
  {
    day: 'sunday',
    task: [
      { taskName: 'خرید مایحتاج خانه', taskTime: '0900', isDone: true },
      { taskName: 'تولد مجید', taskTime: '2000', isDone: false },
      { taskName: 'تمرین مکتب', taskTime: '1600', isDone: true },
    ],
  },
  {
    day: 'monday',
    task: [
      { taskName: 'بازی فوتسال', taskTime: '1800', isDone: false },
      {
        taskName: 'قسمت جدید house of dragons',
        taskTime: '2200',
        isDone: false,
      },
      { taskName: 'دوچرخه سواری', taskTime: '0700', isDone: true },
    ],
  },
  {
    day: 'tuesday',
    task: [
      { taskName: ' دیت', taskTime: '1800', isDone: true },
      { taskName: ' خواب ظهر', taskTime: '1400', isDone: true },
      { taskName: 'پارتی', taskTime: '2200', isDone: false },
      { taskName: ' خواب شب', taskTime: '0400', isDone: false },
    ],
  },

  {
    day: 'wednesday',
    task: [
      { taskName: 'بازی فوتسال', taskTime: '1600', isDone: true },
      { taskName: 'قسمت جدید rick and morty', taskTime: '2200', isDone: false },
      { taskName: 'باشگاه', taskTime: '0900', isDone: true },
    ],
  },
  {
    day: 'thursday',
    task: [{ taskName: 'تابیدن ', taskTime: '2100', isDone: false }],
  },
  {
    day: 'friday',
    task: [{ taskName: 'لهو و لعب', taskTime: '1800', isDone: false }],
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
let tasks = document.querySelector('.tasks');
let sat = document.querySelector('#sat');
let sun = document.querySelector('#sun');
let mon = document.querySelector('#mon');
let tue = document.querySelector('#tue');
let wed = document.querySelector('#wed');
let thu = document.querySelector('#thu');
let fri = document.querySelector('#fri');
let dayArr = document.querySelectorAll('.day');

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
    defaultTask('saturday');
    daysCounter();
  } else {
    alert('failed to login(wrong input value)');
  }
});
function daysCounter() {
  sat.textContent = days[0].task.length;
  sun.textContent = days[1].task.length;
  mon.textContent = days[2].task.length;
  tue.textContent = days[3].task.length;
  wed.textContent = days[4].task.length;
  thu.textContent = days[5].task.length;
  fri.textContent = days[6].task.length;
}

function defaultTask(day) {
  tasks.innerHTML = '';
  for (let i = 0; i < days.length; i++) {
    days[i].task.sort((a, b) => {
      return a.taskTime - b.taskTime;
    });
    if (days[i].day === day) {
      for (let j = 0; j < days[i].task.length; j++) {
        tasks.innerHTML += `<div class="task">
  <div class="row">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      style="fill: #000000"
    >
      <path
        d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z"
      ></path>
    </svg>
    <p class="task-text">${days[i].task[j].taskName}</p>
  </div>

  <div class="task-btns row">
    <button class="task-btn">${days[i].task[j].taskTime.slice(0, 2)}:${days[
          i
        ].task[j].taskTime.slice(2, 4)}</button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="96"
      height="96"
      viewBox="0 0 24 24"
      style="fill: #000000"
    >
      <path
        d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style="fill: #000000"
    >
      <path
        d="M 18.414062 2 C 18.158188 2 17.902031 2.0974687 17.707031 2.2929688 L 16 4 L 20 8 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.925594 2.0974687 18.669937 2 18.414062 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"
      ></path>
    </svg>
  </div>
</div>`;
      }
    }
  }
}

function dayOnClick(e) {
  for (let i = 0; i < dayArr.length; i++) {
    console.log(dayArr[i]);
    dayArr[i].classList.add('back');
  }
  if (e.innerHTML.includes('sat')) {
    e.classList.remove('back');
    defaultTask('saturday');
  } else if (e.innerHTML.includes('sun')) {
    e.classList.remove('back');
    defaultTask('sunday');
  } else if (e.innerHTML.includes('mon')) {
    e.classList.remove('back');
    defaultTask('monday');
  } else if (e.innerHTML.includes('tue')) {
    e.classList.remove('back');
    defaultTask('tuesday');
  } else if (e.innerHTML.includes('wed')) {
    e.classList.remove('back');
    defaultTask('wednesday');
  } else if (e.innerHTML.includes('thu')) {
    e.classList.remove('back');
    defaultTask('thursday');
  } else if (e.innerHTML.includes('fri')) {
    e.classList.remove('back');
    defaultTask('friday');
  }
}
