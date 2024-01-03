<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <MenuComponete></MenuComponete>
      </div>
      <div class="col-md-9">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import MenuComponete from "./components/MenuComponete.vue";
export default {
  components: {
    MenuComponete: MenuComponete,
  },
  setup() {
    return;
  },
};
</script>
