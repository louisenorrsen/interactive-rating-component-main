const buttons = document.querySelectorAll('.rating')
const submit = document.getElementById('submit')

const result = document.getElementById('ratingResult')
let rating = ''

const showRating = () => {
  result.innerHTML = ` ${rating}`
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        rating = e.target.textContent
        showRating()
    })
})

submit.addEventListener('click', () => {
    const thankYouView = document.getElementById("thankYouState")
    const ratingView = document.getElementById("ratingState")
    ratingView.style.display = 'none'
    thankYouView.style.display = 'flex'
    return
})
