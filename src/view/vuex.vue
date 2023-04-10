<template>  
    <div>  
      <p>{{ message }}</p>  
      xxx
    </div>  
  </template>
  
  <script>  
  import Vuex from 'vuex'
  export default {  
    name: 'MyComponent',  
    setup() {  
      const store = new Vuex.Store({  
        states: {  
          message: {  
            default: ''  
          }  
        }  
      })
  
      return {  
        message: store.state.message  
      }  
    }  
  }
  </script>  
  