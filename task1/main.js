scheduleData = [
  {
    object: "Шахматы",
    date: "1 февраля 2024 год",
    maxPerson: 20,
    currentPerson: 16,
  },
  {
    object: "Плавание",
    date: "28 января 2024 год",
    maxPerson: 12,
    currentPerson: 7,
  },
  {
    object: "Аэробика",
    date: "29 января 2024 год",
    maxPerson: 24,
    currentPerson: 18,
  },
  {
    object: "Пилатос",
    date: "2 февраля 2024 год",
    maxPerson: 16,
    currentPerson: 9,
  },
];

const scheduleElem = document.querySelector(".schedule");

// print
function printSchedule() {
  for (const item of scheduleData) {
    const divElem = document.createElement("div");
    divElem.classList.add("item");
    scheduleElem.appendChild(divElem);

    // heading
    const h2Elem = document.createElement("h2");
    h2Elem.classList.add("object_title");
    h2Elem.textContent = item.object;
    divElem.appendChild(h2Elem);

    // info
    const divInfoElem = document.createElement("div");
    divInfoElem.classList.add("info");
    divElem.appendChild(divInfoElem);

    //date
    const dataElem = document.createElement("div");
    dataElem.textContent = `Дата проведения: ${item.date}`;
    divInfoElem.appendChild(dataElem);

    // max count
    const maxPersonElem = document.createElement("div");
    maxPersonElem.textContent = `Кол-во человек: ${item.maxPerson}`;
    divInfoElem.appendChild(maxPersonElem);

    // persons caunt
    const currentPersonElem = document.createElement("div");
    currentPersonElem.classList.add("currentPerson");
    currentPersonElem.textContent = `Кол-во записанных человек: ${item.currentPerson}`;
    divInfoElem.appendChild(currentPersonElem);

    // battons
    const divButtonsElem = document.createElement("div");
    divButtonsElem.classList.add("btn");
    divElem.appendChild(divButtonsElem);
 
    const subscribeBtnElem = document.createElement("button");
    subscribeBtnElem.classList.add("btn_item");
    subscribeBtnElem.classList.add("btn_in");
    subscribeBtnElem.textContent = "записаться";
    divButtonsElem.appendChild(subscribeBtnElem);
   
    const subscribeOutBtnElem = document.createElement("button");
    subscribeOutBtnElem.classList.add("btn_item");
    subscribeOutBtnElem.classList.add("btn_out");
    subscribeOutBtnElem.textContent = "отменить запись";
    divButtonsElem.appendChild(subscribeOutBtnElem);
  }
}

printSchedule();
function changeInfo() {
}

let arrayButtonsInElem = document.querySelectorAll(".btn_in");
let arrayButtonsOutElem = document.querySelectorAll(".btn_out");

for (let index = 0; index < arrayButtonsInElem.length; index++) {
  arrayButtonsInElem[index].addEventListener("click", () => {
    if (scheduleData[index].currentPerson >= scheduleData[index].maxPerson) {
      alert("нет свободных мест для записи! запись невозможна");
    } else {
      scheduleData[index].currentPerson = scheduleData[index].currentPerson + 1;
      const currentPersonElem = document.querySelectorAll('.currentPerson')
      currentPersonElem[index].textContent=`Кол-во записанных человек: ${scheduleData[index].currentPerson}`;
    }
  });
}

// cancellation
for (let index = 0; index < arrayButtonsOutElem.length; index++) {
  arrayButtonsOutElem[index].addEventListener("click", () => {
    scheduleData[index].currentPerson = scheduleData[index].currentPerson - 1;
    if (scheduleData[index].currentPerson < 0){
      alert("очередь пуста")
      scheduleData[index].currentPerson = 0;
    }
    const currentPersonElem = document.querySelectorAll('.currentPerson')
    currentPersonElem[index].textContent=`Кол-во записанных человек: ${scheduleData[index].currentPerson}`;
  });
}
