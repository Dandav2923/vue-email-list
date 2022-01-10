const app = new Vue ({
    el: '#app',
    data: {
        email: []
    },
    created(){
        this.start()
    },
    methods : {
        start: function() {
            for (let index = 0; index < 10; index++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {
                        this.email.push(response.data.response)
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                
            }
        }
    }
})