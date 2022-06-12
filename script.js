

let rating = document.querySelectorAll(".circle")
let tempRating

rating.forEach(btn => {
  btn.addEventListener("click", (e) => {
    removeSelectedClasses()
    tempRating = +e.target.innerText
    e.target.classList.add('active')
  })
})

function removeSelectedClasses() {
  rating.forEach(btn => {
    btn.classList.remove("active")
  }) 
}

function hideAndShowBoxConfirm () {
  let vote = document.querySelector('#vote')
  let confirm = document.querySelector('#confirm')

  confirm.classList.remove('hide')
  vote.classList.add('hide')
}

function handlesubmit() {
  hideAndShowBoxConfirm()
  let span = document.getElementById('rate'); 
  span.innerHTML = +tempRating || 0
}