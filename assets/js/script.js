const navbarBtn= document.querySelector(".bars")
const closeIcon = document.querySelector(".fa-circle-xmark")
const mobileMenyu = document.querySelector(".mobile-menyu")

navbarBtn.addEventListener("click",function(){
    mobileMenyu.classList.add("mobile-menyu-acan")
})

closeIcon.addEventListener("click",function () {
    mobileMenyu.classList.remove("mobile-menyu-acan")
    
})

// rewies melumat getirme
const reylerDivi = document.querySelector("#reviews")

window.addEventListener("load",getLocaldanMelumatGetir)


async function getLocaldanMelumatGetir() {
  const unvan = "assets/reviews.json"
  try{
    const gelenCavab = await fetch (unvan)
    const reviews = await gelenCavab.json()

    console.log(reviews)

    reviews.forEach(function(birRey)  {
      reylerDivi.innerHTML +=`
         <div class="swiper-slide">
            <div class="card" >
              <div class="card-body">
                <h3 class="card-title">${birRey.review_caption}</h3>
                <p class="card-text">${birRey.review_text}</p>
                <a href="#"><i class="fa-solid fa-caret-right"></i>${birRey.review_link}</a>
                
              </div>
            </div>

          </div>
                 
      `
      
    });

  }
  catch(err){

  }
 
}
// rewvies swipper js
const karusel = new Swiper(".reviewsKarusel", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


// accordion js kodu
new Accordion('.accordion-left');
new Accordion('.accordion-right');

// sweet alertin daxil edilmesi
const contactLink = document.querySelector("#contact")
contactLink.addEventListener("click",function (){
  Swal.fire({
    title: 'Contact Us',
    text: 'We would love to hear from you!',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Send Message',
    cancelButtonText: 'Close'
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire('Message Sent!', 'Your message has been sent successfully.', 'success');
    }
});
  
})

  















// swiper kodu
const swiper = new Swiper(".menimKaruselim", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });