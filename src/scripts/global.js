
import SigninComponent from "../components/SigninComponent.vue"
export default{
    name: 'HomeComponent',
    
    data(){
        return{
            greet: 'hello',
            loadingSite: true,
            username: 'CatCat',
            signin: false
        }
    },
    components: {
        SigninComponent
    },
    methods: {
        loadingSystem(){
            setTimeout(() =>{
                this.loadingSite = false
            },3000)
        }
    },
    mounted(){
        this.loadingSystem()
    }
}