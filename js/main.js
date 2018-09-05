const countdown = document.querySelector(".countdown");

//set launch date

const launchDate = new Date("Jan 1, 2019 13:00:00").getTime();

//update every second

const intvl = setInterval(() => {
  //get todays date and time in ms

  const now = new Date().getTime();

  // Distance from now till launch date
  const distance = launchDate - now;

  // Time calculations

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((distance % (1000 * 60)) / 1000);

  //Display the result

  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutess</span></div>
  <div>${sec}<span>Seconds</span></div>
    `;

  // If launch date passed
  if (distance < 0) {
    //stop countdown

    clearInterval(intvl);

    //style and output text

    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
