window.onload = () => {


   let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  }

  const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         const targ = entry.target
         console.log(targ)
         targ.classList.add('bg-sky-100')
         observer.unobserve(targ)
      }
   })
  }, options)

  const grids = document.querySelectorAll('.grid-item')
  grids.forEach(i => observer.observe(i))
}
