document.addEventListener('DOMContentLoaded', () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.href = 'https://ostebliuk.github.io/task2020.18.08/src/styles.css'
  document.head.appendChild(link)

  const button = document.createElement('button');
  button.type = 'button'
  button.id = 'my-button'
  button.textContent = 'Pixibo Modal'
  button.className = 'button-style'
  button.onclick = () => modal.style.display = 'block'

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
  closeButton.onclick = () => modal.style.display = 'none'

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'
    }
  }
  const pixibo = document.querySelector('#pixiboTest')
  pixibo.appendChild(button)
  pixibo.appendChild(modal).appendChild(modalContent).append(closeButton, text)
}, false)
