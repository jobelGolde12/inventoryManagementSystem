<template>
<div>
    
<div class="loading-website d-flex flex-column mt-5 align-items-center pt-5" v-if="loadingSite">
                <h1>Inventory Management System</h1>
            <img src="../assets/loadingGIF.gif" alt="">
        </div>

        <div v-if="loadingSite === false">
            <SigninComponent @getSigninValue="getSigninValue"/>
        </div>

    <div class="parent-div " v-if="signin" >
        
        <header class="header container-fluid d-flex flex-row justify-content-between p-2 bg-light">
            <div class="logo ms-2 mt-3 text-primary fw-bold">IMS</div>

            <div class="header-links d-flex gap-3 align-items-center me-4">

                <div><i class="bi bi-bell fs-5 pointer"></i></div>
                <div class="d-flex align-items-center gap-2">

                    <img src="data:image/png;base64,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" alt="" class="profile pointer" />
                    <p class="text-muted mt-2 pt-1 pointer fw-bold">{{ username }}</p>
                </div>
            </div>
        </header>


        <div class="main-container container-fluid p-0 d-flex">
            <div class="left pt-3">
           <div class="container d-flex flex-column gap-3">
            <div class="sidenav-header p-2">
                <h1 class="fs-5 text-light">Inventory Management System</h1>
            </div>
            <div class="card ps-2 p-2 d-flex flex-row align-items-center"><i class="bi bi-house me-2"></i><div>Home</div></div>
            <div class="card ps-2 p-2 d-flex flex-row align-items-center"><i class="bi bi-diagram-2 me-2"></i><div>Products</div></div>
            <div class="card ps-2 p-2 d-flex flex-row align-items-center"><i class="bi bi-bell me-2"></i><div>Notification</div></div>
            <div class="card ps-2 p-2 d-flex flex-row align-items-center"><i class="bi bi-person me-2"></i><div>Profile</div></div>
            
            <div>
                <p class="text-light">This website is trusted with many people</p>
                <button class="btn btn-primary"><i class="bi bi-book me-2"></i>About website</button>
            </div>


           </div>
        </div>

        <div class="right bg-light ps-3 pe-3">
            <div class="container-fluid d-flex flex-row justify-content-around">
                <div class="card-1 pt-2 pb-1 ps-5 pe-5 rounded text-center"><p class="pb-0 mb-0 fw-bold text-light">All Users</p> <p class="text-light">2000</p></div>
                <div class="card-2 pt-2 pb-1 ps-5 pe-5 rounded text-center"><p class="pb-0 mb-0 fw-bold text-light">Net income</p> <p class="text-light">1.5M</p></div>
                <div class="card-3 pt-2 pb-1 ps-5 pe-5 rounded text-center"><p class="pb-0 mb-0 fw-bold text-light">Product stack</p> <p class="text-light">500,000</p></div>

            </div>

            <canvas id="firstChart" width="400" height="400">Chart</canvas>
        </div>
        </div>
    </div>
</div>
</template>

<script src="../scripts/global.js"></script>

<style>
@import '../assets/styles/global.css';
</style>