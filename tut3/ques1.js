const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.stop(); // (1)
video.play(); // (2)
console.log(this); // (3)
