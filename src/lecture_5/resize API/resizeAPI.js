const resizeObserver = new ResizeObserver(([entry]) => {

  const bodyWidth = entry.contentRect.width;
  const videoWidth = bodyWidth / 2;

  
  const video = document.querySelector('#video');
  video.width = videoWidth;
  console.log(video.width, videoWidth)

});

const body = document.querySelector('body');

resizeObserver.observe(body);