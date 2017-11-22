import Vue from 'vue';
import App from './App'


new Vue({
    el: '#app',
    template: `<App :state="state" />`,
    components: { App },
    data:{
        state:{
            showDone: false,
            todos:[{
                text: "Refactor CSS",
                done: true,
            },{
                text: "Secure Docker Instances",
                done: false
            },{
                text: "Inject flavoring",
                done: false
            }]
        }
    }
});