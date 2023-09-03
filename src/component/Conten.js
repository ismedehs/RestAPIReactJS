import React from "react";
import Footer from "./Footer";

class Konten extends React.Component {
 render () {
  return (
   <div class="container-fluid">
        {/* <!--  Row 1 --> */}
        <div class="row">
          <div class="col-lg-12 d-flex align-items-strech">
            <div class="card w-100">
              <div class="card-body">
                <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div class="mb-3 mb-sm-0">
                    <h5 class="card-title fw-semibold">Dashboard</h5>
                  </div>
                  <br/>
                  <div>
                   <h5>Selamat Datang di E-Perpustakaan</h5>
                  </div>
                </div>
                <div id="chart"></div>
              </div>
            </div>
          </div>
          
        </div>
        
        <Footer/>
      </div>
  )
 }

}

export default Konten;