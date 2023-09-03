import React from "react";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Konten from "../component/Conten";
import Listbuku from "../component/Listbuku";

function List({daftarbuku}) {
  return (
    <div class="body-wrapper">
      <Header />
      <Listbuku daftarbuku={daftarbuku}/>
    </div>
  );
}

export default List;
