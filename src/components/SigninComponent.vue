<template>
    <div class="main-content container-fluid bg-light ">
        <div class="circle-bg" v-if="!loadSystem"></div>
        <div class="circle-bg2"  v-if="!loadSystem"></div>
        <div class="circle-bg3"  v-if="!loadSystem"></div>

        <div class="signin-card d-flex flex-column ">
            <div class="header d-flex flex-row justify-content-between align-items-center mb-2 pt-2 ps-3 pe-3">
                <div class="logo"><h5 class="fs-5 fw-bold text-dark d-flex align-items-center gap-2"> <span class="text-primary onerem d-block hotel">IMS</span></h5></div>
                <div class="links onerem about"><a href="#">{{ signin }}</a></div>
            </div>

            <div class="body  d-flex flex-row gap-2">
                <div class="image"></div>
                <div class="content">
                <h5 class="text-primary mt-3 ms-2 welcome-back" v-if="!signupIsClicked">Welcome Back!</h5>
                <h5 class="text-primary mt-3 ms-2 signup mb-0 pb-0"  v-if="signupIsClicked">Signup</h5>
                <div class=" container-fluid mt-2">
     
                    <div class="input-group mb-2 mt-0" v-if="signupIsClicked">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
                    <input type="text" class="form-control" placeholder="Email" id="email" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

            <div class="input-group mb-2">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
            <input type="text" class="form-control" placeholder="username" id="username" aria-label="Username" aria-describedby="basic-addon1" v-model="username">
            </div>


            <div class="input-group mb-2">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-lock"></i></span>
            <input type="password" class="form-control"  id="passwordInput" placeholder="password" aria-label="password" aria-describedby="basic-addon1" v-model="password">
            </div>

            <div class="input-group mb-2" v-if="signupIsClicked">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-lock"></i></span>
            <input type="password" class="form-control" id="confirmPasswordInput" placeholder="Confirm password" aria-label="password" aria-describedby="basic-addon1">
            </div>

           <div class="show-password-container container d-flex gap-2 flex-row align-items-center mt-0" v-if="!signupIsClicked">
           <input type="checkbox" id="showPassCheckbox" @click="showPassFunc">
                <p v-if="showPassword" class="text-muted mt-3">Show password</p>
                <p v-if="!showPassword"  class="text-muted mt-3">Hide password</p>
           </div>

           <div class="show-password-container container d-flex gap-2 flex-row align-items-center mt-0" v-if="signupIsClicked">
           <input type="checkbox" id="showPassCheckbox" @click="showPassFuncForSignup">
                <p v-if="showPassword" class="text-muted mt-3">Show password</p>
               
           </div>

             <div class="button-container">
                <button class="btn btn-primary mb-0 action-btn">
                    <span v-if="!signupIsClicked" data-bs-toggle="modal" data-bs-target="#chooseType">Login</span>
                    <span v-if="signupIsClicked"  @click="signup">Done</span>
                </button>

                





                <div class="footer-content">
                   <p v-if="!signupIsClicked"> Didn't have an account? | <a href="#" @click="signupFunc">Signup</a> </p>
                   <p v-if="signupIsClicked" class="mt-0 pt-0"> Already have an account? | <a href="#" @click="signinFunc">Login</a> </p>
                </div>
             </div>

             



            </div>
                </div>
            </div>
        </div>
        


<!-- Modal -->
<div class="modal fade" id="chooseType" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Choose type</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid d-flex gap-3 flex-column">
            <div><button class="btn btn-outline-secondary" @click="userLoginFunc">User</button></div>
        <div><button class="btn btn-primary" @click="adminLoginFunc">Admin</button></div>

        </div>
      </div>
      
    </div>
  </div>
</div>
    </div>

   

    
            <div class="load-system bg-light d-flex align-items-center fnt-natural justify-content-center flex-column" v-if="loadSystem">
               <div> <h1>Hotel Reservation System</h1></div>
               <div class="loading"> <div class="loader"></div></div>
                </div>
</template>
<script>
 export default{
    name: 'SigninComponent',
    data(){
        return{
            signin: false,
            username: 'Jobel v. Golde',
            password: 'nonong123',
            showPassword: true
        }
    },
    methods: {
        async fetchData() {
      try {
        const response = await fetch('http://localhost:8080/inventory_management_system_project/backend/main.php');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        } 
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error in fetch:', error);
      }
    },
    adminLoginFunc(){
        this.signin = true
        this.$emit('getSigninValue' , this.signin)
    },
    showPassFuncForSignup(){
        let passwordInput = document.getElementById('passwordInput')
        let confirmPasswordInput =document.getElementById('confirmPasswordInput')

        console.log('clicked the function')
        if(passwordInput.type === 'password' || confirmPasswordInput === 'password'){
           passwordInput.type = 'text'
           confirmPasswordInput = 'text'
        }else{
            passwordInput.type = 'password'
           confirmPasswordInput = 'password'
        }
    },

    showPassFunc(){

        let passwordInput = document.getElementById('passwordInput')
        let confirmPasswordInput =document.getElementById('confirmPasswordInput')
        if(passwordInput.type === 'password' || confirmPasswordInput === 'password'){
           passwordInput.type = 'text'
        }else{
            passwordInput.type = 'password'
           confirmPasswordInput = 'password'
        }
    }

    // fetchData(){
    //     fetch('/backend/main.php')
    // .then(res =>{
    //     return res.json()
    // })

    // .then(data =>{
    //     console.log(data)
    // })

    // .catch(error =>{
    //     console.log('Fetch Error: ' + error)
    // })
    // }
    },
    mounted(){
        this.fetchData()
    }
 }
</script>

<!-- <style>
@import "./styles/global.css";
</style> -->

<style scoped>


.main-content{
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
.main-content .signin-card{
    position: absolute;
    background: var(--bg-primary);
    top: 5rem;
    box-shadow: 0 0 1px #ccc;
   width:50%;
   height: 60%;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
}
.signin-card .body{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.signin-card .body .image{
    background-image: url('../assets/login.jpg');
    width: 50%;
    height: 90%;
    position: relative;
background-size: cover;
    background-position: center;
    transition: .3s;
}
.signin-card .body .image:hover{
    transform:scale(1.1);
}
.body .content{
    transform: translateY(-7%);
}
.links a{
    text-decoration: none;
    color: var(--clr-secondary);
}
.links a:hover{
    color: var(--clr-in-hover);
}
.form{
    position: relative;
    width: 100%;
}
.links a{
    text-transform: uppercase;
    font-weight: 600;
}
.circle-bg{
    position: absolute;
    top: 5%;
    left: 10%;
    width: 20%;
    aspect-ratio: 10 / 9;
    background: var(--circle-bg);
    border-radius: 50%;
    opacity: .5;
    animation: animateWidth 1s ease forwards;
}
@keyframes animateWidth{
    from{
        width: 0;
        left: 15%;
    }
    to{
        width: 20%;
    }
}
.circle-bg2{
    position: absolute;
    top: 9%;
    right: -10%;
    width: 40%;
    aspect-ratio: 10 / 9;
    background: var(--circle-bg);
    border-radius: 50%;
    animation: animateWidth2 1s ease forwards;

}
@keyframes animateWidth2{
    from{
        width: 0;
    }
    to{
        width: 40%;
    }
}
.welcome-back{
    animation: animate1 1s ease forwards;
    animation-delay: .1s;
}
@keyframes animate1{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

.load-system{
    position:absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
.load-system .loading{
    position: relative;
    width: 30%;
    height: 5%;
    background: #ccc;
    border-radius: 20px;
}
.load-system .loading .loader{
    position: relative;
    width: 0;
    height: 100%;
    border-radius: inherit;
    animation: animateLoader 5s ease forwards;
    background: linear-gradient(to right , blue,#007bff);
}
.m-logo{
    padding: .3rem .5rem;
    border-radius: 50%;
    font-weight: 300;
}
#showPassCheckbox{
    cursor: pointer;
}
#showPassCheckbox:hover{
    color: green;
}
/* .show-password-container{
    transform: translateY(-20%);
} */
@keyframes animateLoader{
    from{
        width: 5%;

    }
    to{
        width: 100%;
    }
}
.modal-body .container-fluid button{
 position: relative;
 width: 100%;
}

@media screen and (max-width: 984px){
    .signin-card .body  .image{
        display: none;
    }
    .body{
        justify-content: center;
        align-items: center;
    }

    .main-content .signin-card{
        width: 40%;
    }
    .welcome-back , .signup{
        font-size: 1rem;
        margin-left: .2rem;
    }
    .footer-content{
        margin-top: .8rem;
    }
    
    .onerem{
        font-size: .8rem;
    }
    .action-btn{
        position: relative;
        width: 100%;
    }
    .show-password-container{
        margin-left: 0;
        padding-left: 0;
    }
    .body{
    transform: translateX(20%);
    position: relative;
    width: 90%;
   }
   .body .content{
    transform: translateY(3%);
   }

}



@media screen and (max-width: 600px){
    
    .welcome-back , .signup{
        font-size: .8rem;
    }
    .footer-content{
        margin-top: .8rem;
    }
    .hotel{
        margin-top: .2rem;
    }
    .about{
        margin-top: -.2rem;
    }
    .footer-content p{
        font-size: .5rem;
        text-align: center;
    }
    .welcome-back , .signup{
        margin-left: .2rem;
    }
    .body .content{
    transform: translateY(-3%);
}
    
}
@media screen and (max-width: 644px){
    .footer-content p{
        font-size: .7rem;
        text-align: center;
    }
    
  
}



</style>