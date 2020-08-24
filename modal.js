document.addEventListener('DOMContentLoaded', () => {
  const styles = `
    .button-style {
      background-color: #277951;
      border: none;
      border-radius: 0.3rem;
      color: white;
      margin: 2rem;
      padding: 1rem;
    }

    .modal-style {
      display: none;
      position: fixed;
      z-index: 1;
      padding-top: 10rem;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.6);
    }

    .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 1rem;
      border-radius: 0.5rem;
      width: 20%;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    .text-style {
      color: black;
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
    .close {
      color: #aaaaaa;
      float: left;
    }

    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  `

  const styleSheet = document.createElement('style')
  styleSheet.type = "text/css"
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)

  const button = document.createElement('button');
  button.type = 'button'
  button.id = 'my-button'
  button.textContent = 'Pixibo Modal'
  button.className = 'button-style'
  button.onclick = () => modal.style.display = "block"

  const modal = document.createElement('div');
  modal.type = 'modal-window'
  modal.className = 'modal-style'

  const modalContent = document.createElement('div');
  modalContent.type = 'content'
  modalContent.className = 'modal-content'

  const text = document.createElement('p')
  text.textContent = 'Hello World!'
  text.className = 'text-style'

  const closeButton = document.createElement('span')
  closeButton.className = 'close'
  closeButton.textContent = 'x'

  window.onclick = (e) => {
    if (e.target === modal || e.target === closeButton) {
      modal.style.display = 'none'
    }
  }
  document.querySelector('#pixiboTest').appendChild(button).appendChild(modal).appendChild(modalContent).append(closeButton, text)
}, false)
