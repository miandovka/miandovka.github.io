<template>
  <!-- source: https://vuejs.org/v2/examples/tree-view.html-->
  <li>
    <div >
      {{ item.name }}

      <input v-if="item.children === undefined" v-model="item.size" :placeholder="item.size">

      <span @click="toggle" v-if="item.children !== undefined">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen">
      <tree-item
          class="item"
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
      ></tree-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'treeItem',
  props: {
    item: Object
  },
  data: function () {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen;
    },
  }

}
</script>