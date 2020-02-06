<template>
    <div id="navbar">
      <div>
  <b-navbar class="barre">
    <b-navbar-nav>
      <b-nav-item class="item" href="#">Home</b-nav-item>

      <!-- Navbar dropdowns -->
      <b-nav-item-dropdown class="item" text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown class="item" text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

.item {
  font-size: 40px;
  font-family: "Lobster";
}

.navbar .navbar-nav .nav-link {
    color: white;
}

.barre {
  justify-content: center;
  color: white !important;
  width: 100%;
  background-color: rgba(76, 92, 104, 0.5);
}

</style>