<template>
  <div>
    <postnav></postnav>
    <div class="container-fluid">
      <br />
      <br />
      <br />
      <br />

      <figure class="card">
        <figcaption>
          <h2>Michael <span>roberto</span></h2>
          <h3>Jurusan IPA</h3>
        </figcaption>
        <img src="user.png" />
        <div class="email">kathkaren21@gmail.com</div>
      </figure>

      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
      <h2> Anda telah mengerjakan ujian Try Out Bimbingan Belajar Prosus Inten TA.2020/21</h2>
      </center>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import Postnav from "../components/Postnav";

export default {
  name: "user",
  components: {
    Postnav,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
html {
  height: 100%;
}
body {
  font-family: "Muli", sans-serif;
  background-color: #1e272e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
  height: 100%;
}

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

figure.card * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.card > img {
  width: 20%;
  border-radius: 50%;
  border: 4px solid #ffffff;
  position: relative;
  float: right;
  right: -65%;

  z-index: 1;
}
figure.card figcaption {
  padding: 20px 30px 20px 20px;
  position: absolute;
  left: 0;
  width: 50%;
}
figure.card figcaption h2,
figure.card figcaption p {
  margin: 0;
  text-align: left;
  padding: 10px 0;
  width: 100%;
}
figure.card figcaption h2 {
  font-size: 1.2em;
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
figure.card figcaption h3 {
  font-size: 1em;
  font-weight: bold;
  text-align: right;
}

figure.card figcaption h2 span {
  font-weight: 800;
  color: #b71540;
}
figure.card figcaption p {
  font-size: 0.9em;
  opacity: 0.8;
}
figure.card figcaption .icons {
  width: 100%;
  text-align: left;
}
figure.card figcaption .icons i {
  font-size: 26px;
  padding: 5px;
  top: 50%;
  color: #000000;
}
.icons i:hover {
  color: #b71540 !important;
  cursor: pointer;
}
figure.card figcaption a {
  opacity: 0.3;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}

figure.card .email {
  width: 100%;
  padding: 15px 20px;
  font-size: 0.9em;
  opacity: 1;
  color: #ffffff;
  background: #b71540;
  clear: both;
  font-weight: bold;
}
</style>
