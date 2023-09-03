import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Konten from "../component/Conten";
import Listbuku from "../component/Listbuku";
import Daftarpinjam from "../component/Daftarpinjam";

function Dpinjam({daftarbuku, listpinjam}) {
  return (
    <div class="body-wrapper">
      <Header />
      <Daftarpinjam daftarbuku={daftarbuku} listpinjam={listpinjam}/>
    </div>
  );
}

export default Dpinjam;
