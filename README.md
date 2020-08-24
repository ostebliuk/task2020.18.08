HOW TO USE

  1. Download and put "src" folder into your project folder. 
  2. Insert
  <script src="modal.js"></script>
  into your index.html "body" section
  
DESCRIPTION

  1. styles.css
    We have here CSS classes for elements we create in modal.js. Since inline CSS is generally a bad idea and not always possible, it makes much more sense to use a separate file for CSS. 
    Button style mimics button from test task description. modal-style is basically a textbook set of properties. 
    Modal opacity is set via alpha channel and 0.6 should be equal to the one provided in task description. 
    Text style is in separate class just in case we'll need to add some content to the modal except "Hello world" so we won't need to do this afterwards.
    Close marker floats to the left as in the task description and changes it's color to black on hover and focus because it looks cool. 
  
  2. modal.js
    Since we don't know where this script will be injected in the client's code, we need to use event listener for DOMContentLoaded event. Other scripts will block DOMContentLoaded, so we'll see it's result only after DOM is loaded, which is exactly what we need. However, there's an exception. If there will be async scripts, we'll have to add 
    if (document.readyState !== "loading")
    line into our script because DOMContentLoaded is not blocked by scripts with async attribute.
    After DOMContentLoaded fires, we create a button. two divs, one p and one span. 
    Button onclick sets modal display to "block" which shows modal to the user. We don't need to use trigger here because we'll hide the modal by clicking on any part outside of it later. 
    It's logical that user will want to hide the modal by clicking on "X" or just anywhere outside of the highlighted area, that's why window.onclick tracks exactly mentioned areas. 
    And to assemble all of this elements into one we first use querySelector for getting element with 'pixiboTest' class (querySelector('#pixiboTest') equals to .getElementById(pixiboTest), but I prefer to use querySelector because it's newer and since you can get pretty much any element with it, you don't need to use various getElementBySomething and just use querySelector).
    We also need to create an appropriate structure where each following element is a child element for the previous one except for two last ones. That's why I used .appendChild and .append respectively. 

