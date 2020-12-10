<template>
<div>
  <Navigation > 
  </Navigation>
      <div class="container-fluid">
        <br>
          <br>
            <br>
              <br>
                <br>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
              <img class="d-block w-25" src="inten.jpg" style="width:100%;margin-left:auto; margin-right:auto; display: block;">
          </div>
        </div>
        <center>
          <p style="margin-left: 1rem; padding-bottom: 1rem;">
            "INI ADALAH WEBSITE TRYOUT PROSUS INTEN"
          </p>
        </center>

   <br>
       <br>
          <br> 
        <center>
            <router-link to="/register" style="text-decoration: none;">
            <button type="button" class="btn btn-lg btn-primary" style="display: block;">Daftar Disini</button>
            </router-link>
        </center>
                    <br>
                        <br>
                            <br>
      
</div>
</div>
</template>

<script>

import Navigation from '../components/Navigation'

export default {
  name: 'Home',
  components: {
    Navigation
    
  }
}
</script>
