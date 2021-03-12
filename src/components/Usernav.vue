<template>
  <div id="Usernav">
    <nav
      class="navbar navbar-expand-lg"
      style="margin-left:2.9rem; margin-right:2.9rem;margin-top: 1rem;background:#fff;"
    >
      <a
        class="navbar-brand"
        href="/"
        style="font-size:40px;color:black;margin-left:auto; margin-right:auto;"
        >Selamat Datang !</a
      >
    </nav>

    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style="margin-left:2.9rem; margin-right:2.9rem;background-color:#e91e63;"
    >
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        style="margin-left:38rem;"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/user" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login">
            <button class="warna">Sign Out</button>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script></script>

<style scoped>
    a{
      text-align: center;
      margin-left:auto;
      margin-right:auto;
    }

    button{
    border: none;
    padding: 5px 8px;
    border-radius: 5px;
    color: white;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
}
.warna{background-color:red;}

button:hover{
    background-color: #333;
}

</style>
