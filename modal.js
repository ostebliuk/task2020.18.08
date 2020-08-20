document.addEventListener('DOMContentLoaded', () => {
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