import { useState } from 'react';
import React from "react";
import Footer from "./Footer";
import { CorsOptions } from 'cors';


import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Formpinjam({daftarbuku}) {

  const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
     console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('https://api-splp.layanan.go.id:443/t/sampangkab.go.id/Perpus_tes/1.0/', {
            method: 'POST',
            body: JSON.stringify({...inputs}),
            withCredentials : false,
            headers: {
                "Content-type": "application/json;",
                'Access-Control-Allow-Origin': '*',
                'APIkey' : 'eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBzYW1wYW5na2FiLmdvLmlkIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJhZG1pbkBzYW1wYW5na2FiLmdvLmlkIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJEZWZhdWx0QXBwbGljYXRpb24iLCJpZCI6MTI5OSwidXVpZCI6IjJkMmE5NDU5LWYzMWUtNDNkMy1iODkxLTc3OWI2NzUzMTlkZCJ9LCJpc3MiOiJodHRwczpcL1wvc3BscC5sYXlhbmFuLmdvLmlkOjQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoic2FtcGFuZ2thYi5nby5pZCIsIm5hbWUiOiJTaWJhcmlzX1NhbXBhbmciLCJjb250ZXh0IjoiXC90XC9zYW1wYW5na2FiLmdvLmlkXC9hc2V0X2RhZXJhaF9zYW1wYW5nXC8xLjAiLCJwdWJsaXNoZXIiOiJhZG1pbkBzYW1wYW5na2FiLmdvLmlkIiwidmVyc2lvbiI6IjEuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJzYW1wYW5na2FiLmdvLmlkIiwibmFtZSI6IlBlamFiYXRfU2FtcGFuZyIsImNvbnRleHQiOiJcL3RcL3NhbXBhbmdrYWIuZ28uaWRcL2RhZnRhcl9wZWphYmF0X3NhbXBhbmdcLzEuMCIsInB1Ymxpc2hlciI6ImFkbWluQHNhbXBhbmdrYWIuZ28uaWQiLCJ2ZXJzaW9uIjoiMS4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6InNhbXBhbmdrYWIuZ28uaWQiLCJuYW1lIjoiUGVycHVzX1RlcyIsImNvbnRleHQiOiJcL3RcL3NhbXBhbmdrYWIuZ28uaWRcL1BlcnB1c190ZXNcLzEuMCIsInB1Ymxpc2hlciI6ImFkbWluQHNhbXBhbmdrYWIuZ28uaWQiLCJ2ZXJzaW9uIjoiMS4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9XSwidG9rZW5fdHlwZSI6ImFwaUtleSIsInBlcm1pdHRlZElQIjoiIiwiaWF0IjoxNjkzNzE2MTM1LCJqdGkiOiI5MDliMjNiNy0wZjZhLTRhODktODdhNC1jYjc2NmVkNDRjNzcifQ==.LoWn7p7hxvWuGVswP_Tq6MzBdKI9fEOgXHyVAmk8pNHQJAmLX9WmTHr8QlcTTdwY3Og9BGj4ogYNxaOFE3MCVN88d39yYDNol26E9M7TOflXW2BGWDEcna6KwssmfTqB1MzPjicp-KIRj_AooTSAHYUpUJKxp7FyXef-A4VOTT9w4MyH47l3HOoZO07GG9xuSHVrxReHHHemzN08Oe4klWDq7riaDBKzMZbEj4Uw9XlerZT17IGsf12OFkIKfjCL32j8BnjHCHe-1H2MOtiUW2IyF28afFWP76FB83xfjlyAF-VGaDzBHIt1eQBX76r2az2y4x9olA_q0pFv09dlIg=='
            }
        })
        .then((res) => {
         if (res.ok) {
           // return res.json();
           alert("Data Berhasil ditambahkan");
         } else {
          alert("Error fatching data");          
         }
       })
        // .then(response => {
        //     if (response.status === 200) {
        //         alert("New website saved successfully");
        //     } else {
        //      alert("gagal");
        //     }
        // });
        //react convert object to string
        // alert(JSON.stringify({...inputs}));
    }

  return (
   <div class="container-fluid">
      <div class="card bg-light-info shadow-none position-relative overflow-hidden">
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">Form Buku</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted " href="./index.html">
                      Dashboard
                    </a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    Form Buku
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-3">
              <div class="text-center mb-n5">
                <img
                  src="../../dist/images/breadcrumb/ChatBc.png"
                  alt=""
                  class="img-fluid mb-n4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
       <div class="card-body">
         <h5 class="mb-3">Form Peminjamam</h5>
         <form onSubmit={handleSubmit}>
           <div class="row">
             <div class="col-md-4">
               <div class="form-floating mb-3">
                 {/* <select class="form-select col-12" id="inlineFormCustomSelect"> */}
                 <select name='id_buku' className='form-select col-12' onChange={handleChange}>         
                  <option value="">Pilih Buku</option>
                   {daftarbuku.map((book => (<option key={book.id_buku} value={book.id_buku}>{book.judul}</option>)))}
                   {/* <option selected="">Choose...</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option> */}
                 </select>
                 <label for="tb-fname">Buku</label>
               </div>
             </div>
             <div class="col-md-4">
               <div class="form-floating mb-3">
                 <input type="text" class="form-control" name='namapinjam' onChange={handleChange}/>
                 <label for="tb-email">Nama</label>
               </div>
             </div>
             <div class="col-md-4">
               <div class="form-floating">
                 <input type="number" class="form-control" name='lama' onChange={handleChange}/>
                 <label for="tb-pwd">Lama</label>
               </div>
             </div>
             
             <div class="col-12">
               <div class="d-md-flex align-items-center mt-3">
                 
                 <div class="ms-auto mt-3 mt-md-0">
                   <button type="submit" class="btn btn-info font-medium rounded-pill px-4">
                     <div class="d-flex align-items-center">
                       <i class="ti ti-send me-2 fs-4"></i>
                       Submit
                     </div>
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </form>
       </div>
     </div>
      

      <Footer />
    </div>
  )
 }



export default Formpinjam;