import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Konten from "../component/Conten";
import Listbuku from "../component/Listbuku";
import Formpinjam from "../component/Formpinjam";

function Pinjam({daftarbuku}) {
  return (
    <div class="body-wrapper">
      <Header />
      <Formpinjam  daftarbuku={daftarbuku}/>
    </div>
  );
}

export default Pinjam;
