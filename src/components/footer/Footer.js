import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div class="container-expand-lg mt-5 w-full mx-0" >

        <footer class=" bg-dark text-center text-white" >
          {/* <!-- Grid container --> */}
          <div class="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
              {/* <!-- Facebook --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#3b5998'}}
                href="#!"
                role="button"
              ><i class="fab fa-facebook-f"></i></a>

              {/* <!-- Twitter --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#55acee'}}
                href="#!"
                role="button"
              ><i class="fab fa-twitter"></i></a>

              {/* <!-- Google --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:' #dd4b39'}}
                href="#!"
                role="button"
              ><i class="fab fa-google"></i></a>

              {/* <!-- Instagram --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:' #ac2bac'}}
                href="#!"
                role="button"
              ><i class="fab fa-instagram"></i></a>

              {/* <!-- Linkedin --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:' #0082ca'}}
                href="#!"
                role="button"
              ><i class="fab fa-linkedin-in"></i></a>
              {/* <!-- Github --> */}
              <a
                class="btn btn-primary btn-floating m-1"
                style={{backgroundColor:'#333333'}}
                href="#!"
                role="button"><i class="fab fa-github"></i></a>
            </section>
            {/* <!-- Section: Social media --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
            © 2024 Copyright          </div>
          {/* <!-- Copyright --> */}
        </footer>

      </div>
      {/* <!-- End of .container --> */}
    </>
  )
}

export default Footer