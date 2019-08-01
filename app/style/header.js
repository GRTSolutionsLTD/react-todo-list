export function apearDiv() {
  const element= document.getElementById("link");
  if (element.style.display === "none") {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }
}
