
import SigninComponent from "../components/SigninComponent.vue"
import Chart from 'chart.js/auto';
export default{
    name: 'HomeComponent',
    
    data(){
        return{
            greet: 'hello',
            loadingSite: true,
            username: 'Jobel v. Golde',
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
        },
        getSigninValue(value){
            this.signin = value
        },
        getTimeFirstChart() {
         if(this.signin === true){
          var ctx = document.getElementById('firstChart').getContext('2d');
          var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                  datasets: [{
                      label: '# of Votes',
                      data: [12, 19, 3, 5, 2, 3],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      y: {
                          beginAtZero: true
                      }
                  }
              }
          });
          console.log(myChart)
         }
         } 
        },
    mounted(){
        this.loadingSystem()
          this.getTimeFirstChart()
    }
}