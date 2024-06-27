// Freamwork Vue
const { createApp } = Vue;


// Createapp Vue
  createApp({
    data() {
      return {
        email:``
      }
    },
    methods:{

    },
    mounted(){
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(item => {
            const result = item.data.response;
            this.email = result;
            
        });
    }

  }).mount('#app')
