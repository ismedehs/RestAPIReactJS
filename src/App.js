import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
// import Header from './component/Header';
// import Konten from './component/Conten';
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from './page/Dash';
import List from './page/List';
import Layout from './Layout';
import Pinjam from './page/Pinjam';
import Dpinjam from './page/Dpinjam';

function App() {

  const [dataBuku, setData] = useState(null);
  const [dataPinjam, setDataPinjam] = useState(null);

  useEffect(() => {
    fetch("https://layanan-tik.sampangkab.go.id/epus/api/buku", {
      method: "GET",
      // headers: {
      //   authorization: "BaseAuth W1lcmxsa=",
      // },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        alert("Error fatching data");
      })
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch("https://api-splp.layanan.go.id:443/t/sampangkab.go.id/Perpus_tes/1.0/", {
      method: "GET",
      headers: {
        APIkey: "eyJ4NXQiOiJOVGRtWmpNNFpEazNOalkwWXpjNU1tWm1PRGd3TVRFM01XWXdOREU1TVdSbFpEZzROemM0WkE9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbkBzYW1wYW5na2FiLmdvLmlkIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJhZG1pbkBzYW1wYW5na2FiLmdvLmlkIiwidGllclF1b3RhVHlwZSI6bnVsbCwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJEZWZhdWx0QXBwbGljYXRpb24iLCJpZCI6MTI5OSwidXVpZCI6IjJkMmE5NDU5LWYzMWUtNDNkMy1iODkxLTc3OWI2NzUzMTlkZCJ9LCJpc3MiOiJodHRwczpcL1wvc3BscC5sYXlhbmFuLmdvLmlkOjQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50IiwiZ3JhcGhRTE1heENvbXBsZXhpdHkiOjAsImdyYXBoUUxNYXhEZXB0aCI6MCwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwicGVybWl0dGVkUmVmZXJlciI6IiIsInN1YnNjcmliZWRBUElzIjpbeyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoic2FtcGFuZ2thYi5nby5pZCIsIm5hbWUiOiJTaWJhcmlzX1NhbXBhbmciLCJjb250ZXh0IjoiXC90XC9zYW1wYW5na2FiLmdvLmlkXC9hc2V0X2RhZXJhaF9zYW1wYW5nXC8xLjAiLCJwdWJsaXNoZXIiOiJhZG1pbkBzYW1wYW5na2FiLmdvLmlkIiwidmVyc2lvbiI6IjEuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJzYW1wYW5na2FiLmdvLmlkIiwibmFtZSI6IlBlamFiYXRfU2FtcGFuZyIsImNvbnRleHQiOiJcL3RcL3NhbXBhbmdrYWIuZ28uaWRcL2RhZnRhcl9wZWphYmF0X3NhbXBhbmdcLzEuMCIsInB1Ymxpc2hlciI6ImFkbWluQHNhbXBhbmdrYWIuZ28uaWQiLCJ2ZXJzaW9uIjoiMS4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6InNhbXBhbmdrYWIuZ28uaWQiLCJuYW1lIjoiUGVycHVzX1RlcyIsImNvbnRleHQiOiJcL3RcL3NhbXBhbmdrYWIuZ28uaWRcL1BlcnB1c190ZXNcLzEuMCIsInB1Ymxpc2hlciI6ImFkbWluQHNhbXBhbmdrYWIuZ28uaWQiLCJ2ZXJzaW9uIjoiMS4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9XSwidG9rZW5fdHlwZSI6ImFwaUtleSIsInBlcm1pdHRlZElQIjoiIiwiaWF0IjoxNjkzNzE2MTM1LCJqdGkiOiI5MDliMjNiNy0wZjZhLTRhODktODdhNC1jYjc2NmVkNDRjNzcifQ==.LoWn7p7hxvWuGVswP_Tq6MzBdKI9fEOgXHyVAmk8pNHQJAmLX9WmTHr8QlcTTdwY3Og9BGj4ogYNxaOFE3MCVN88d39yYDNol26E9M7TOflXW2BGWDEcna6KwssmfTqB1MzPjicp-KIRj_AooTSAHYUpUJKxp7FyXef-A4VOTT9w4MyH47l3HOoZO07GG9xuSHVrxReHHHemzN08Oe4klWDq7riaDBKzMZbEj4Uw9XlerZT17IGsf12OFkIKfjCL32j8BnjHCHe-1H2MOtiUW2IyF28afFWP76FB83xfjlyAF-VGaDzBHIt1eQBX76r2az2y4x9olA_q0pFv09dlIg==",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        alert("Error fatching data");
      })
      .then((data) => {
        // console.log(data.data);
        setDataPinjam(data.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
   

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Dash />} />
            <Route path="list" element={<List daftarbuku={dataBuku}/>} />
            <Route path="pinjam" element={<Pinjam  daftarbuku={dataBuku}/>} />
            <Route path="listpinjam" element={<Dpinjam  daftarbuku={dataBuku} listpinjam={dataPinjam}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

    
  );
}

export default App;
