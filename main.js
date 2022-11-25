window.onload = () => {


   let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
  }


//   ОБС для LOCATION
  const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const targ = entry.target
         console.log(targ)
         targ.classList.remove('opacity-0')
         targ.classList.add('opacity-100')
         observer.unobserve(targ)
      }
   })
  }, options)


  const loc = document.querySelector('#location')
  const grids = document.querySelectorAll('#grid')
  grids.forEach(i => observer.observe(i))
  observer.observe(loc)
}
