<template>
<div>
    
<div class="loading-website d-flex flex-column mt-5 align-items-center pt-5" v-if="loadingSite">
                <h1>Inventory Management System</h1>
            <img src="../assets/loadingGIF.gif" alt="">
        </div>

        <div v-if="loadingSite === false">
            <SigninComponent />
        </div>

    <div class="parent-div" v-if="signin" >
        
        <header class="header container-fluid d-flex flex-row justify-content-between p-2 bg-light">
            <div class="logo ms-2 mt-3">Logo</div>

            <div class="header-links d-flex gap-3 align-items-center me-4">

                <div><i class="bi bi-bell fs-5 pointer"></i></div>
                <div class="d-flex align-items-center gap-2">

                    <img src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp" alt="" class="profile pointer" />
                    <p class="text-muted mt-2 pt-1 pointer fw-bold">{{ username }}</p>
                </div>
            </div>
        </header>


        <div class="main-container container-fluid p-0 d-flex">
            <div class="left bg-secondary">
            Sidenav
        </div>

        <div class="right bg-light">
            main
        </div>
        </div>
    </div>
</div>
</template>

<script src="../scripts/global.js"></script>

<style>
@import '../assets/styles/global.css';
</style>