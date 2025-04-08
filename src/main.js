import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);


// app.filter('tosomeFilter',function(value){
//    if (value == 1){
//      return 1
//    }
// });


app.directive('rainbow', {
  beforeMount(el, binding, vnode) {
    if(binding.value=='mycus'){
        el.style.color = "red";


    }
    else{
        el.style.color = "blue";
    }

    if(binding.arg=='column'){
      
        alert("kenguva")
    }
  
  }
});

app.mount('#app');
