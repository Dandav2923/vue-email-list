const app = new Vue ({
    el: '#app',
    data: {
        email: ['']
    },
    created(){
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")

            .then((response) =>{
                this.email = response.data.response;
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            });
    },
})