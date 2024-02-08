const inputbox = document.getElementById('input-box')

const listContainer = document.getElementById('list-container')

function AddTask () {
  if (inputbox.value === '') {
    alert('Please add some task !!!')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputbox.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = '❌'
    li.appendChild(span)
  }
  inputbox.value = ''
  saveData()
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName == 'LI') {
      console.log(e.target.classList)
      e.target.classList.toggle('checked')
      saveData()
    } else if (e.target.tagName == 'SPAN') {
      e.target.parentElement.remove()
      saveData()
      e.target.classList.toggle('checked')
    }
  },
  false
)

function saveData () {
  localStorage.setItem('data', listContainer.innerHTML)
}

function showTask () {
  listContainer.innerHTML = localStorage.getItem('data')
}
showTask()
