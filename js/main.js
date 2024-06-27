// Freamwork Vue
const { createApp } = Vue;


// Createapp Vue
  createApp({
    data() {
      return {
        emailList: [
            
        ]
      }
    },
    methods:{
        createEmails(){
            for(let i = 0; i < 10; i++) {
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(item => {
                    this.emailList.push(item.data.response);
                    console.log(this.emailList);
                });
            }
        }
    },
    created(){
        this.createEmails();
    },
    }).mount('#app')
