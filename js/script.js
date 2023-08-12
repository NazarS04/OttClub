"use strict";

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