<template>
    <div id='Navigation'>
        <nav class="navbar navbar-expand-lg" style="margin-left:2.9rem; margin-right:2.9rem;margin-top: 1rem;background:#fff;">
            <a class="navbar-brand" href="/" style="font-size:40px; padding-left:24rem; color:black;">TRY OUT ONLINE PROSUS INTEN</a>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-dark" style="margin-left:2.9rem; margin-right:2.9rem;background-color:#e91e63;">
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left:38rem;">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>


<script>

export default {
  name: 'Navigation'
}
</script>

<style scoped>
    a{
      text-align: center;
    }

</style>