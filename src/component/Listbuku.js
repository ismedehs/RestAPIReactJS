import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import Footer from "./Footer";

function Listbuku ({daftarbuku}) {
 // console.log(daftarbuku);

  return (
    <div class="container-fluid">
      <div class="card bg-light-info shadow-none position-relative overflow-hidden">
        <div class="card-body px-4 py-3">
          <div class="row align-items-center">
            <div class="col-9">
              <h4 class="fw-semibold mb-8">List Buku</h4>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a class="text-muted " href="./index.html">
                      Dashboard
                    </a>
                  </li>
                  <li class="breadcrumb-item" aria-current="page">
                    List Buku
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

      <div class="card w-100 position-relative overflow-hidden">
        <div class="px-4 py-3 border-bottom">
          <h5 class="card-title fw-semibold mb-0 lh-sm">Data Buku</h5>
        </div>
        <div class="card-body p-4">
          <div class="table-responsive rounded-2 mb-4">
            <table class="table border text-nowrap customize-table mb-0 align-middle">
              <thead class="text-dark fs-4">
                <tr>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Id Buku</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Judul</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Penulis</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Penerbit</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Tahun Terbit</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Stok</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                {daftarbuku &&
                  daftarbuku.map((item) => {
                    return (
                      <tr>
                        <td>{item.id_buku}</td>
                        <td>{item.judul}</td>
                        <td>{item.penulis}</td>
                        <td>{item.penerbit}</td>
                        <td>{item.tahunterbit}</td>
                        <td>{item.stok}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listbuku;
