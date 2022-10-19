window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      // item.style.display = 'none';
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    })
  }

  function showTabContent(i = 0) {
    // tabsContent[i].style.display = 'block';
    // tabs[i].classList.add('tabheader__item_active');
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }


  hideTabContent();
  showTabContent();
  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }

  });




  //Timer start

  const deadline = '2022-10-22';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()), //получим количество миллисекунд до которого нам ннада досчитать и находим разницу
      days = Math.floor(t / (1000 * 60 * 60 * 24)), //1000*60 колво млсек в одной минуте 1000*60*60 колво млсек в одном часе, 1000 * 60 * 60 * 24 - сколько в сутках будет млсек
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num
    }

  }

  function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

  }


  setClock('.timer', deadline);
    //Timer stop
});