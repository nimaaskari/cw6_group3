let days = [
  {
    day: 'saturday',
    task: [
      { taskId: "90001", taskName: 'رفتن به باشگاه', taskTime: '1800', isDone: false },
      { taskId: "90002", taskName: 'رفتن به آرایشگاه', taskTime: '1000', isDone: false },
      { taskId: "90003", taskName: 'پرداخت قسط وام مسکن', taskTime: '0800', isDone: true },
    ],
  },
  {
    day: 'sunday',
    task: [
      { taskId: "90004", taskName: 'خرید مایحتاج خانه', taskTime: '0900', isDone: true },
      { taskId: "90005", taskName: 'تولد مجید', taskTime: '2000', isDone: false },
      { taskId: "90006", taskName: 'تمرین مکتب', taskTime: '1600', isDone: true },
    ],
  },
  {
    day: 'monday',
    task: [
      { taskId: "90007", taskName: 'بازی فوتسال', taskTime: '1800', isDone: false },
      {
        taskId: "90008",
        taskName: 'قسمت جدید house of dragons',
        taskTime: '2200',
        isDone: false,
      },
      { taskId: "90009", taskName: 'دوچرخه سواری', taskTime: '0700', isDone: true },
    ],
  },
  {
    day: 'tuesday',
    task: [
      { taskId: "90010", taskName: ' دیت', taskTime: '1800', isDone: true },
      { taskId: "90011", taskName: ' خواب ظهر', taskTime: '1400', isDone: true },
      { taskId: "90012", taskName: 'پارتی', taskTime: '2200', isDone: false },
      { taskId: "90013", taskName: ' خواب شب', taskTime: '0400', isDone: false },
    ],
  },

  {
    day: 'wednesday',
    task: [
      { taskId: "90014", taskName: 'بازی فوتسال', taskTime: '1600', isDone: true },
      { taskId: "90015", taskName: 'قسمت جدید rick and morty', taskTime: '2200', isDone: false },
      { taskId: "90016", taskName: 'باشگاه', taskTime: '0900', isDone: true },
    ],
  },
  {
    day: 'thursday',
    task: [{ taskId: "90017", taskName: 'تابیدن ', taskTime: '2100', isDone: false }],
  },
  {
    day: 'friday',
    task: [{ taskId: "90018", taskName: 'لهو و لعب', taskTime: '1800', isDone: false }],
  },
];

let userData = {
  name: '',
  lastName: '',
  phoneNumber: '',
};
let flagDay = 0;
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
        tasks.innerHTML += `<div id=${days[i].task[j].taskId} class="task">
  <div class="row">
  <input onclick="checkBoxFunction(this)" type="checkbox" >
    <p class="task-text">${days[i].task[j].taskName}</p>
  </div>

  <div class="task-btns row">
    <button class="task-btn">${days[i].task[j].taskTime.slice(0, 2)}:${days[
            i
          ].task[j].taskTime.slice(2, 4)}</button>
    <svg
      onclick="removingTask(this)"
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
      onclick="editTask(this)"
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
    // console.log(dayArr[i]);
    dayArr[i].classList.add('back');
  }
  if (e.innerHTML.includes('sat')) {
    e.classList.remove('back');
    defaultTask('saturday');
    flagDay = 0;
  } else if (e.innerHTML.includes('sun')) {
    e.classList.remove('back');
    defaultTask('sunday');
    flagDay = 1;
  } else if (e.innerHTML.includes('mon')) {
    e.classList.remove('back');
    defaultTask('monday');
    flagDay = 2;
  } else if (e.innerHTML.includes('tue')) {
    e.classList.remove('back');
    defaultTask('tuesday');
    flagDay = 3;
  } else if (e.innerHTML.includes('wed')) {
    e.classList.remove('back');
    defaultTask('wednesday');
    flagDay = 4;
  } else if (e.innerHTML.includes('thu')) {
    e.classList.remove('back');
    defaultTask('thursday');
    flagDay = 5;
  } else if (e.innerHTML.includes('fri')) {
    e.classList.remove('back');
    defaultTask('friday');
    flagDay = 6;
  }
}
function removingTask(e) {
  let selectedTask = e.parentElement.parentElement;
  // console.log(selectedTask)
  let tempId = selectedTask.getAttribute("id");
  // console.log(tempId)
  // selectedTask.remove();
  // console.log(days[flagDay].task)

  for (let i = 0; i < days[flagDay].task.length; i++) {
    // console.log(i)
    if (days[flagDay].task[i].taskId === tempId) {
      days[flagDay].task.splice(i, 1);
      break;
    }
  }
  selectedTask.remove();
  daysCounter();
  // console.log(days[flagDay].task)
}
function deleteAll() {
  let temp = 0;
  for (let i = 0; i < days[flagDay].task.length; i++) {
    temp = document.getElementById(`${days[flagDay].task[i].taskId}`);
    temp.remove();
  }
  days[flagDay].task.splice(0, days[flagDay].task.length)
  daysCounter();

}
function checkBoxFunction(e) {
  let temp = e.parentElement;
  let tempId = temp.parentElement.getAttribute("id");
  temp.parentElement.classList.toggle("background-checked");
  // temp.parentElement.style.backgroundColor = "red";
  console.log(temp.parentElement);

  console.log(tempId);
  // console.log(temp.textContent);
  temp.classList.toggle("checked");
  for (let i = 0; i < days[flagDay].task.length; i++) {
    // console.log(i)
    if (days[flagDay].task[i].taskId === tempId) {
      days[flagDay].task[i].isDone = !(days[flagDay].task[i].isDone);
      break;
    }
  }
  console.log(days[flagDay].task);
}
let globalTempId;
function editTask(e) {
  let temp = document.querySelector(".edit-modal");
  temp.classList.toggle("hidden");
  main.classList.toggle("is-blurred");

  let selectedTask = e.parentElement.parentElement;
  globalTempId = selectedTask.getAttribute("id");

}
function submitEdit(e) {
  if (document.getElementById("edit-input").value) {
    e.parentElement.classList.toggle("hidden");
    main.classList.toggle("is-blurred");
    document.getElementById(`${globalTempId}`).querySelector(".task-text").textContent = document.getElementById("edit-input").value;
  } else {
    alert("ورودی اشتباه است")
  }
  for (let i = 0; i < days[flagDay].task.length; i++) {
    // console.log(i)
    if (days[flagDay].task[i].taskId === globalTempId && document.getElementById("edit-input").value) {

      days[flagDay].task[i].taskName = document.getElementById("edit-input").value;
      break;
    }
  }
  // console.log(document.getElementById(`${globalTempId}`).querySelector(".task-text").textContent);
  // console.log(document.getElementById("edit-input").value);
  // console.log(days[flagDay].task)
}
function addTask(e) {
  if (document.getElementById("add-new").value && document.getElementById("add-new-time").value) {
    let newObj = {
      taskId: Math.floor((Math.random()) * (200000 - 90019 + 1)) + 90019,
      taskName: document.getElementById("add-new").value,
      taskTime: document.getElementById("add-new-time").value.split(":").join(""),
      isDone: false
    };
    days[flagDay].task.push(newObj);
    const daysWeek = ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
    defaultTask(daysWeek[flagDay]);
    daysCounter();
  } else {
    alert("ورودی ها اشتباه هستند");
  }
}
