const formProps = document.getElementById("form-props").selectedIndex;
const propOptions = document.getElementsByTagName("option")[formProps].value;

// formProps.addEventListener("change", function () {
//alert("Test Box!");
// });

propOptions.addEventListener("change", () => {
  console.log(propOptions);
});

// function testFunction() {

//   console.log(formProps);
// }

const selectElement = document.querySelector(".ice-cream");

selectElement.addEventListener("change", (event) => {
  const result = document.querySelector(".result");
  result.textContent = `You like ${event.target.value}`;
});
