// const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

// const numBalls = 50;
// const balls = [];

// for (let i = 0; i < numBalls; i++) {
//   let ball = document.createElement("div");
//   ball.classList.add("ball");
//   ball.style.background = colors[Math.floor(Math.random() * colors.length)];
//   ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
// //   ball.style.top = `${Math.floor(Math.random() * 1000)}px`;
//   ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
//   ball.style.transform = `scale(${Math.random()})`;
//   ball.style.width = `${Math.random()}em`;
//   ball.style.height = ball.style.width;
  
//   balls.push(ball);
//   document.body.append(ball);
// }

// // Keyframes
// balls.forEach((el, i, ra) => {
//   let to = {
//     x: Math.random() * (i % 2 === 0 ? -11 : 11),
//     y: Math.random() * 12
//   };

//   let anim = el.animate(
//     [
//       { transform: "translate(0, 0)" },
//       { transform: `translate(${to.x}rem, ${to.y}rem)` }
//     ],
//     {
//       duration: (Math.random() + 1) * 2000, // random duration
//       direction: "alternate",
//       fill: "both",
//       iterations: Infinity,
//       easing: "ease-in-out"
//     }
//   );
// });
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 200;
const balls = [];
const animatedBackground = document.getElementById('animated-background'); // Ensure this is the correct ID for your container

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  animatedBackground.appendChild(ball); // Ensure balls are added to the container
}

// Adjust the animation logic
balls.forEach((el, index) => {
  let directionX = Math.random() * (index % 2 === 0 ? -11 : 11);
  let directionY = Math.random() * 12;

  let anim = el.animate([
    { transform: `translate(0, 0) scale(${Math.random()})` },
    { transform: `translate(${directionX}rem, ${directionY}rem) scale(${Math.random()})` }
  ], {
    duration: (Math.random() + 1) * 2000, // Random duration between 2000 and 4000 milliseconds
    direction: 'alternate',
    fill: 'both',
    iterations: Infinity,
    easing: 'ease-in-out'
  });
});
