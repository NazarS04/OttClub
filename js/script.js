"use strict";

// ------------------- Channels -------------------

const channelsContainer = document.querySelector(".channels__channels");
const moreChannelsBtn = document.querySelector(".channels__more-channels");

moreChannelsBtn.addEventListener("click", function (e) {
  this.classList.toggle("channels__more-channels_active");

  if (this.classList.contains("channels__more-channels_active")) {
    channelsContainer.style.maxHeight = channelsContainer.scrollHeight + "px";
  } else {
    channelsContainer.style.maxHeight = "";
  }
})

// ------------------- Questions -------------------
document.querySelector(".popular-questions__questions").addEventListener("click", function (e) {
  let target = e.target;

  if (target.tagName !== "BUTTON") {
    target = target.closest(".question__button");
  }

  if (!target) {
    return;
  }

  const question = target.closest(".question");
  const textWrapper = question.querySelector(".question__text-wrapper");

  question.classList.toggle("question_active");

  if (question.classList.contains("question_active")) {
    textWrapper.style.height = textWrapper.scrollHeight + "px";
  } else {
    textWrapper.style.height = "";
  }
})
