


const typeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.wait = parseInt(wait, 10);
  this.wordIndex = 0;
  this.txt = "";
  this.type();
  this.isDeleting = false;
}

typeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 300;
  
  if (this.isDeleting) {
    this.wait =
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.wordIndex++;
  }
  setTimeout(() => this.type(), 500);
}

// Intializing the init function when the DOM loads
document.addEventListener('DOMContentLoaded', init);

// Init function for grapping element from the DOM and also intializing the object
function init() {
  const txtElement = document.querySelector('.txt-type'),
    words = JSON.parse(txtElement.getAttribute('data-words')),
    wait = txtElement.getAttribute('data-wait');

  // intializing the object
  new typeWriter(txtElement, words, wait);
}

