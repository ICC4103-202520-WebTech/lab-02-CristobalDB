document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const input = document.getElementById("myInput");
  const title = document.getElementById("title");

  if (button && input && title) {
    button.addEventListener("click", function() {
      let inputValue = input.value;
      title.textContent = inputValue;
    });
  }
});
