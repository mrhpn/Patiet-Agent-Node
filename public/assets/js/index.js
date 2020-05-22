const domStrings = {
  state: "#state",
  township: "#township",
  close: ".close",
  successBox: ".success",
  dangerBox: ".danger",
};

const inputState = document.querySelector(domStrings.state);
const inputTownship = document.querySelector(domStrings.township);
const closeBtn = document.querySelector(domStrings.close);
const successBox = document.querySelector(domStrings.successBox);
const dangerBox = document.querySelector(domStrings.dangerBox);

state.addEventListener("change", function () {
  const state = parseInt(inputState.value);

  fetch("/assets/nrc-data.json")
    .then((res) => {
      if (!res.ok) throw new Error("Error getting NRC data");

      res.json().then((data) => {
        if (data.error) throw new Error(data.error);

        inputTownship.innerHTML = data[state].map(
          (township) => `<option value="${township}">${township}</option>`
        );
      });
    })
    .catch((err) => console.log(err));
});

if (closeBtn && successBox) {
  closeBtn.addEventListener("click", function () {
    successBox.parentNode.removeChild(successBox);
    window.location = "/";
  });
} else if (closeBtn && dangerBox) {
  closeBtn.addEventListener("click", function () {
    dangerBox.parentNode.removeChild(dangerBox);
    window.location = "/";
  });
}
