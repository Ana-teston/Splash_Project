const { body } = document;

function changeBackground(number) {
  // Check if background alred showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset css class fro body
  body.className = '';
  switch (number) {
    case '1':
      body.classList.add('background-1');
      break;
    case '2':
      body.classList.add('background-2');
      break;
    case '3':
      body.classList.add('background-3');
      break;   
  }
}
