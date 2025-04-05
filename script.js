document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  const response = document.getElementById("response");
  response.innerText = `Thank you, ${name}! Your message has been submitted.`;

  this.reset();
});
