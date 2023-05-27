// The following lines of code has been inspired by the provided youtube resoruce in week 13 resources
// The youtube link can be found here: https://youtu.be/ywtkJkxJsdg

const openButton = document.querySelector("[open-modal]")
const closeButton = document.querySelector("[close-modal]")
const modal = document.querySelector("dialog")

openButton.addEventListener("click", () => {
    modal.showModal();
})

closeButton.addEventListener("click", () => {
    modal.close();
})