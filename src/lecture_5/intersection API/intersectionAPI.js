// const observer = new IntersectionObserver(([entry]) => {

//   alert('we scrolled to the video and intersection ratio is' + entry.intersectionRatio);

// }, {
//     root: null,
//     rootMargin: '0px',
//     threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
//   });

const video = document.querySelector('#video');

// observer.observe(video);

// function useVisibility(el, callback, opts = {}) {
//       let previousY = 0;
//       const observer = new IntersectionObserver((
//           [entry]
//       ) => {
//           let intRatio = entry.intersectionRatio;
//           let currentY = entry.boundingClientRect.y;
//           let direction;

//           if( previousY < currentY){
//             direction = -1;
//           }
//           else {
//             direction = 1;
//           }

//           callback(intRatio, direction);
//           previousY = currentY;
//       }, {
//               root: null,
//               rootMargin: '0px',
//               threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
//           });

//       if (el) {
//           observer.observe(el);
//       }
// }

// useVisibility(video, (intRatio, direction) => {

//   if(intRatio > 0.25){

//     if(video.paused){
//       video.play();
//     }
    
//   }

// } )