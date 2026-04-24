<template>
    <header class="header">
        <a href="#home" >
            <img src="../assets/logo.png" alt="logo" class="logo">
        </a>
        <h1>Portfolio de Aarin DEB</h1>
        <nav>
            <a href="#about">A propos</a>
            <a href="#project">Réalisations</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
</template>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 1000;
        box-shadow: 0 3px 30px #7f5af0;

        background-color: #16161a;
    }

    nav a {
        margin: 0 15px;
    }

    .logo {
        height: 150px;
    }
</style>