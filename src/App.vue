<template>


  <div id="app">
    <h1>Sunburst Demo</h1>

    <h2 class="centered-description">
      sunburst - first attempt
    </h2>
    <div class="sunburst-parent">
      <sunburst :data="tree">

        <!-- Add behaviors -->
        <template slot-scope="{ on, actions }">
          <highlightOnHover v-bind="{ on, actions }"/>
          <zoomOnClick v-bind="{ on, actions }"/>
        </template>

        <!-- Add information to be displayed on top the graph -->
        <!--      <nodeInfoDisplayer slot="top" slot-scope="{ nodes }" :current="nodes.mouseOver" :root="nodes.root"-->
        <!--                         description="of SSD is taken by the following file/folder"/>-->

        <!-- Add bottom legend -->
        <breadcrumbTrail slot="legend" slot-scope="{ nodes, colorGetter, width }" :current="nodes.mouseOver"
                         :root="nodes.root" :colorGetter="colorGetter" :from="nodes.clicked" :width="width"/>

      </sunburst>
    </div>

    <h2 class="centered-description">
      sunburst - second attempt
    </h2>
    <div class="sunburst-d2b-parent">
      <ChartSunburst :data="tree"></ChartSunburst>
    </div>

    <ul id="tree">
      <treeItem
          class="item"
          :item="tree"
      ></treeItem>
    </ul>
  </div>
</template>

<script>

import {
  breadcrumbTrail,
  highlightOnHover,
  // nodeInfoDisplayer,
  sunburst,
  zoomOnClick
} from 'vue-d3-sunburst';
import "vue-d3-sunburst/dist/vue-d3-sunburst.css";
import ChartSunburst from 'vue-d2b';

import treeItem from './components/treeItem.vue'

export default {
  name: 'App',
  data() {

    return {
      
      tree: {

        "name": "Home",
        "size": 300,
        "children": [
          {
            "name": "Documents",
            "size": 200,
            "children": [
              {"name": "file1", "size": 50},
              {"name": "file2", "size": 100},
              {"name": "file3", "size": 5},
              {"name": "file4", "size": 45}
            ]
          },
          {
            "name": "Downloads",
            "size": 80,
            "children": [
              {"name": "file1", "size": 20},
              {"name": "file2", "size": 10},
              {"name": "file3", "size": 5},
              {"name": "file4", "size": 30},
              {"name": "file5", "size": 15}
            ]
          },
          {
            "name": "Music",
            "size": 20,
            "children": [
              {"name": "file1", "size": 12},
              {"name": "file2", "size": 8}
            ]
          }
        ]
      }
    }
  },
  components: {

    treeItem,
    breadcrumbTrail,
    ChartSunburst,
    highlightOnHover,
    // nodeInfoDisplayer,
    sunburst,
    zoomOnClick,
  }
}
</script>

