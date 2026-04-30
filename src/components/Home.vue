<template>
    <div class="container">
        <img src="../assets/introPic.jpg" alt="pp" class="pp">

        <p>Salut!👋 Je suis</p>
        <h1>Aarin DEB</h1>
        <p>
            Je suis en cours d'apprentissage
            pour devenir Développeur Web et
            Web Mobile
        </p>
    </div>
</template>

<style scoped>
    .pp {
        height: 350px;
        border-radius: 50%;
        filter: drop-shadow(10px 10px 10px black);
    }

    /*Media queries*/

    @media (max-width: 768px) {
        .pp {
            height: 200px;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        .container {
            padding-top: 150px;
        }
    }
</style>