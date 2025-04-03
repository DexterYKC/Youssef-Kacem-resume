const modal = document.querySelectorAll('.services__modal'),
    modalButton = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

    let activeModal = (modalClick) =>{
        modal[modalClick].classList.add('active-modal')
    }

    modalButton.forEach((modalButton, i)=> {
        modalButton.addEventListener('click', () =>{
            activeModal(i)
        })
    })


    modalClose.forEach((modalClose)=>{
        modalClose.addEventListener('click', () =>{
            modal.forEach((modalRemove) => {
                modalRemove.classList.remove('active-modal')
            })
        })
    })


    const swiperTesimonial = new Swiper('.testimonial__swiper', {
        // true or false
        loop: false, 
        spaceBetween : 32,
        grabCursor: true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets : true,
          clickable : true,
        },
      
        // Navigation arrows
       
      })


      const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up')
            this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                    : scrollUp.classList.remove('show-scroll')
      }

      window.addEventListener('scroll', scrollUp)


    //   var modal2 = document.getElementById('services__modalcontent'); // The modal overlay
    //   var modalContent = document.querySelector('.services__modal-content'); // The modal content
      
    //   document.addEventListener('click', function(event) {
    //     var isClickInsideModal = modalContent.contains(event.target);
      
    //     if (!isClickInsideModal && modal2.style.display === 'block') {
    //       modal2.style.display = 'none'; // Or any method you use to hide the modal
    //     }
    //   });



    document.getElementById('popupButton').onclick = function() {
        var popup = document.getElementById('popup');
        popup.classList.toggle('hidden');
    };
    
    document.getElementById('closeButton').onclick = function() {
        var popup = document.getElementById('popup');
        popup.classList.add('hidden');
    };
    