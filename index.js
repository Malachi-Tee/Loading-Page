let enterButton = document.getElementById("overlayEnterButton")

enterButton.addEventListener("click", ()=>{
  console.log('click')
  const overlayPage = document.getElementById("overlayPage")

  overlayPage.classList.add("overlayPage-hidden")

  overlayPage.addEventListener("transitionend", () =>{
    overlayPage.remove()
  })
})