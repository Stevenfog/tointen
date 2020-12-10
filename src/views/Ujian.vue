<template>
  <div>
    <ujiannav></ujiannav>
    <div class="container-fluid">
      <br />
      <br />
      <br />
      <br />
      <h1 style="font-size:30px;">
        1. Jamur air atau Oomycota tidak dikelompokkan ke dalam kingdom Fungi,
        tetapi dikelompokkan ke dalam kingdom Chromista. Hal ini karena…
      </h1>
      <label class="container"
        >dinding sel tersusun atas selulosa dan glikan
        <input type="radio" checked="checked" name="radio" />
        <span class="checkmark"></span>
      </label>
      <label class="container"
        >unisel dan tidak punya kloroplas
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
      <label class="container"
        >ada mastigoneme pada flagellanya
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
      <label class="container"
        >bersifat parasitik obligat
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
      <label class="container"
        >menghasilkan zoospora
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
      </label>
      <br />
      <br />
      <br />
    </div>
    <div>
      <div class="container-fluid">
        <h1 style="font-size:30px;">
          2. Laju pembentukan etanol bila menggunakan glukosa dikatakan lebih
          cepat daripada sukrosa. Hal ini terjadi karena…
        </h1>
        <label class="container"
          >sukrosa harus dipecah terlebih dahulu menjadi gula sederhana
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >hasil glikolisis langsung membentuk alkohol bila menggunakan glukosa
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >ada mastigoneme pada flagellanya
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >enzim-enzim tak bekerja optimal bila substrat bukan gula
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >substrat sukrosa hanya menghasilkan 1 molekul etanol dari 1 molekul
          gula
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <br />
        <br />
        <br />
        <h1 style="font-size:30px;">
          3. Seorang pasien melakukan uji urine agar diketahui jenis
          penyakitnya. Berikut ini hasil uji urine pasien tersebut.
        </h1>
        <img src="soalbio.png" />
        <h1 style="font-size:30px;">
          Pasien tersebut kemungkinan mengalami sakit pada organ…
        </h1>
        <label class="container"
          >sukrosa harus dipecah terlebih dahulu menjadi gula sederhana
          <input type="radio" checked="checked" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >hasil glikolisis langsung membentuk alkohol bila menggunakan glukosa
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >ada mastigoneme pada flagellanya
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >enzim-enzim tak bekerja optimal bila substrat bukan gula
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >substrat sukrosa hanya menghasilkan 1 molekul etanol dari 1 molekul
          gula
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <br />
        <br />
        <br />
        <br />
        <br />
        <router-link to="/post">
          <figure class="card">
            <button class="tombol">Selesai mengerjakan, SUBMIT !</button>
          </figure>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Ujiannav from "../components/Ujiannav";
export default {
  name: "ujian",
  components: {
    Ujiannav,
  },
};
</script>

<style>
figure.card {
  position: relative;
  overflow: hidden;
  margin: 10px;
  margin-right: auto;
  margin-left: auto;
  min-width: 380px;
  max-width: 480px;
  width: 100%;
  background: #ffffff;
  color: #000000;
}
button {
 
    border: none;
    font-family: "Muli", sans-serif;
    text-transform: uppercase;
    padding: 20px 150px;
    border-radius: 5px;
    color: white;
    margin-left: auto;
    margin-right: auto;
 
    cursor: pointer;
    text-decoration: none;
}
.tombol{background-color:#e91e63;}

button:hover{
    background-color: #333;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
