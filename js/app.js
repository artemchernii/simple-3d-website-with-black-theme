window.onload = () => {
  document.body.classList.add('loaded');
  setTimeout(() => {
    Draggable.create('.gallery', {
      bounds: 'body',
      inertia: true,
    });
    console.log('loaded', document.body.classList);
  }, 2000);
};
