import menubar from './components/menubar.vue';
import menubox from './components/menubox.vue';
import pagetemplate from './components/pagetemplate.vue';
import prevbttn from './components/prevbttn.vue';
import nextbttn from './components/nextbttn.vue';
import comicpanel from './components/comicpanel.vue';
import forms from './components/forms.vue';

import panelData from "./panels.json";
import menuData from "./menu.json";




export default {
  name: 'app',


  components: { menubar, menubox, pagetemplate, prevbttn, nextbttn, comicpanel, forms },


  data () {


    return {
      currentNum: 0,


    panels: panelData,

    menuselect: 0,

    menuitems: menuData,

    menuitems2: [
      "start",
      "comic",
      "creator",
      "contact"
    ],

    }
  },


  methods: {
    nextPanel: function (event) {
      if(this.currentNum < ( this.panels.length -1 ))
        this.currentNum ++ ;
    },

    prevPanel: function (event) {
      if(this.currentNum > 0)
        this.currentNum -- ;
      else
        this.menuselect=0;
    },

    showPageNow: function(event,str) {
      return str;
    }



  },
}