// 모든 페이지에서 공통으로 사용될 부분 

// header > sub-menu > search
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function(){
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
})

// footer > 올해 가져오기 
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear() 