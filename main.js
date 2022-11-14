window.onload = () => {


   let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
  }



  

//   ОБС для гридов
  const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const targ = entry.target
         console.log(targ)
         targ.classList.add('bg-white')
         observer.unobserve(targ)
      }
   })
  }, options)

  const grids = document.querySelectorAll('.grid-item')
  grids.forEach(i => observer.observe(i))
}
