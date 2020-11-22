<template>


  <div id="app">
    <h1>Sunburst Demo</h1>


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
        <breadcrumbTrail slot="legend" slot-scope="{ nodes, colorGetter}" :current="nodes.mouseOver"
                         :root="nodes.root" :colorGetter="colorGetter" :from="nodes.clicked" :width="80"/>

      </sunburst>
    </div>

    <ul id="tree">
      <treeItem
          class="item"
          :item="tree"
      ></treeItem>
    </ul>

    <p>
      Ich habe mit der <a href="https://github.com/David-Desmaisons/Vue.D3.sunburst">Vue.D3.sunburst von
      David Desmaisons</a> angefangen, aber es
      hat mir einen sehr komischen Graph angezeigt. Als ich noch eine zweite Library ausprobiert habe (<a
        href="http://www.d2bjs.org/">d2b</a>) und das gleiche angezeigt war kam mir in Sinn, dass bei einem Sunburst
      Diagramm nur die
      Blätter des Datenbaums einen Wert haben sollten. Als ich meinen Test-Dataset entsprechend verändert habe hat alles
      korrekt funktioniert. Das Diagramm auf dieser Seite benutzt Vue.D3.sunburst. Ich habe entschieden die eingebaute onhover übersicht zu entfernen, da die Breadcrumbs diese Information besser präsertieren.
      <br>
      Für die Tree-Ansicht wo man die Daten bearbeiten kann habe ich entschieden einen Component zu bauen. Ich habe
      mit dem <a href="https://vuejs.org/v2/examples/tree-view.html">Beispiel auf der Vue.js Seite</a> angefangen und
      habe es angepasst um die Daten bearbeiten zu können.
      <br><br>
      Beim 2. Teil der Aufgabe habe ich probiert einen interaktiven Graph in D3.js umzusetzen. Mir fehlen aber die
      Kenntnisse um das in 2 Stunden in D3 machen zu können. Ich habe experimentiert aber habe da nichts zu zeigen.
    </p>
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

import treeItem from './components/treeItem.vue'

export default {
  name: 'App',
  data() {

    return {

      tree: {

        "name": "Home",
        "children": [
          {
            "name": "Documents",
            "children": [
              {"name": "file1", "size": 50},
              {"name": "file2", "size": 100},
              {"name": "file3", "size": 5},
              {"name": "file4", "size": 45}
            ]
          },
          {
            "name": "Downloads",
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
            "children": [
              {"name": "file1", "size": 12},
              {"name": "file2", "size": 8}
            ]
          }
        ]
      },
      treeford2b: {

        "label": "Home",
        "size": 300,
        "children": [
          {
            "label": "Documents",
            "size": 200,
            "children": [
              {"label": "file1", "size": 50},
              {"label": "file2", "size": 100},
              {"label": "file3", "size": 5},
              {"label": "file4", "size": 45}
            ]
          },
          {
            "label": "Downloads",
            "size": 80,
            "children": [
              {"label": "file1", "size": 20},
              {"label": "file2", "size": 10},
              {"label": "file3", "size": 5},
              {"label": "file4", "size": 30},
              {"label": "file5", "size": 15}
            ]
          },
          {
            "label": "Music",
            "size": 20,
            "children": [
              {"label": "file1", "size": 12},
              {"label": "file2", "size": 8}
            ]
          }
        ]
      }
    }
  },
  components: {

    treeItem,
    breadcrumbTrail,
    highlightOnHover,
    // nodeInfoDisplayer,
    sunburst,
    zoomOnClick,
  }
}
</script>

