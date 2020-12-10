<template>
  <div id="Ujiannav">
    <nav
      class="navbar navbar-expand-lg"
      style="margin-left:2.9rem; margin-right:2.9rem;margin-top: 1rem;background:#fff;"
    >
      <a
        class="navbar-brand"
        href="/"
        style="font-size:40px;color:black;margin-left:auto; margin-right:auto;"
        >Selamat Mengerjakan !</a
      >
    </nav>

    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="margin-left:2.9rem; margin-right:2.9rem;background-color:#e91e63;"
    >
      <div class="main">
        <p>Sisa Waktu :</p>
        {{ timerCount }} <a> menit </a>
      </div>
    </nav>
  </div>

</template>

<script>

    export default {

        data() {
            return {
                timerCount: 120
            }
        },

        watch: {

            timerCount: {
                handler(value) {

                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

        }
    }
</script>

<style scoped>
a {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

button {
  border: none;
  padding: 5px 8px;
  border-radius: 5px;
  color: white;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
}
.warna {
  background-color: red;
}

button:hover {
  background-color: #333;
}
body {
  background: #101123;
  font-family: sans-serif;
}
.main {
  margin: auto;
  text-align: center;
  color: #696969;
}
h4 {
  margin-bottom: 40px;
  font-size: 30px;
  color: #fff;
}
#clock > div {
  border-radius: 5px;
  background: #e91e63;
  padding: 20px 20px 10px 20px;
  color: #fff;
  display: inline-block;
}
#clock > div > p {
  font-size: 16px;
}
#days,
#hours,
#minutes,
#seconds {
  padding: 20px;
  font-size: 20px;
  background: white;
  display: inline-block;
  width: 40px;
}
span.turn {
  animation: turn 0.7s ease;
}
@keyframes turn {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>
