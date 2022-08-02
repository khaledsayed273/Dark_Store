let AllLinks = document.querySelectorAll('.nav-item a')





AllLinks.forEach((ele) => {
    ele.addEventListener('click' , function(){
        AllLinks.forEach((e) => {
            e.classList.remove('active')
        })
        ele.classList.add('active')
    })
})




