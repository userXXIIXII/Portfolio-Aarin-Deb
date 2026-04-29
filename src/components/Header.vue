<template>
    <header class="header">
        <a href="#home" @click="current = 'home'">
            <img src="../assets/logo.png" alt="logo" class="logo">
        </a>
        <h1>Portfolio de Aarin DEB</h1>
        <nav :class="{ open: isOpen }">
            <a href="#about" @click="current = 'about'" 
            :class="{ active: current === 'about' }">A propos</a>

            <a href="#project" @click="current = 'project'" 
            :class="{ active: current === 'project' }">Réalisations</a>

            <a href="#contact" @click="current = 'contact'" 
            :class="{ active: current === 'contact' }">Contact</a>
        </nav>

        <!--burger-->

        <div class="burger" @click="isOpen = !isOpen">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--header-height);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    z-index: 1000;
    background-color: #16161a;
    box-shadow: 0 3px 30px #7f5af0;
}

/* nav desktop */
nav {
    display: flex;
}

nav a {
    margin: 0 15px;
}

.logo {
    height: 130px;
    max-width: 100%;
}

/* ================= BURGER ================= */

.burger {
    display: none;
    width: 30px;
    height: 25px;
    position: relative;
    cursor: pointer;
}

/* barres */
.burger span {
    position: absolute;
    width: 100%;
    height: 3px;
    background: white;
    left: 0;
    transition: all 0.3s ease;
}

/* position */
.burger span:nth-child(1) {
    top: 0;
}

.burger span:nth-child(2) {
    top: 10px;
}

.burger span:nth-child(3) {
    top: 20px;
}

/* animation croix */
.burger.open span:nth-child(1) {
    transform: rotate(45deg);
    top: 10px;
}

.burger.open span:nth-child(2) {
    opacity: 0;
}

.burger.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 10px;
}

/* ================= MOBILE ================= */

@media (max-width: 768px) {

    .header {
        flex-direction: row;
        height: auto;
        padding: 20px;
    }

    h1 {
        font-size: 18px;
    }

    .logo {
        height: 80px;
    }

    /* burger visible */
    .burger {
        display: block;
    }

    /* menu caché */
    nav {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #16161a;

        display: none;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }

    /* menu ouvert */
    nav.open {
        display: flex;
    }

    nav a {
        margin: 10px 0;
        font-size: 18px;
    }
}

</style>

<script>
//fonction pour le soulignement des nav
    export default {
        data() {
            return {
                current: 'home',
                isOpen: false
            }
        },
        methods: {
            setActive(section) {
                this.current = sectionthis.isOpen = false
            }
        }
    }
    

</script>