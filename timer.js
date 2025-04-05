let totalTime;
let startTime;
let interval;

function startTimer() {

const hour = parseInt(document.getElementById("hour").value) || 0;
const minute = parseInt(document.getElementById("minute").value) || 0;
const second = parseInt(document.getElementById("second").value) || 0;


totalTime =
(hour * 60 * 60 * 1000 +
minute * 60 * 1000 +
second * 1000);


startTime = new Date().getTime();
const endTime = startTime + totalTime;

clearInterval(interval); 

interval = setInterval(function () {
    const now = new Date().getTime();
    const difference = endTime - now -1000;

    if(difference <= 0){
        document.getElementById("hours").innerHTML = ":)";
        document.getElementById("minutes").innerHTML = ":)";
        document.getElementById("seconds").innerHTML = ":)";

        document.getElementById("myBar").style.width = "100%";

        clearInterval(interval);
        return;
    }

    const displayHours = String(
        Math.floor(((difference + 1000) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const displayMinutes = String(
        Math.floor(((difference + 1000) % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const displaySeconds = String(
        Math.floor(((difference + 1000) % (1000 * 60)) / 1000)
      ).padStart(2, "0");


      document.getElementById("hours").innerHTML = `${displayHours}`;
      document.getElementById("minutes").innerHTML = `${displayMinutes}`;
      document.getElementById("seconds").innerHTML = `${displaySeconds}`;

      const progressWidth = ((totalTime - difference) / totalTime) * 100;
      document.getElementById("myBar").style.width = `${progressWidth}%`;

}, 100);

}


function endTimer() {
    clearInterval(interval);
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    document.getElementById("hour").value = "";
  document.getElementById("minute").value = "";
  document.getElementById("second").value = "";

  document.getElementById("myBar").style.width = "0%";
  }