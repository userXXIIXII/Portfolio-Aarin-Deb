<template>
    <transition name="modal-animation">
        <div v-if="modalActive" class="modal" @click.self="close">
        
        <transition name="modal-animation-inner">
            <div class="modal-inner">
            
            <!-- Close icon -->
            <i 
                @click="close" 
                class="fa-regular fa-circle-xmark"
            ></i>

            <!-- Content -->
            <slot />

            <button @click="close">Fermer</button>
            </div>
        </transition>

        </div>
    </transition>
</template>

<script>
export default {
    props: ["modalActive"],
    emits: ["close"],

    setup(props, { emit }) {
        const close = () => {
        emit("close")
        }

        return { close }
    }
}
</script>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;

    background: rgba(22, 22, 26, 0.6);
    backdrop-filter: blur(8px);
}

.modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    background-color: #16161a;
    padding: 40px 20px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.modal-inner i {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 22px;
    cursor: pointer;
    }

.modal-inner i:hover {
    color: crimson;
}

/* Animations */
.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity 0.2s ease;
    }

.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal-animation-inner-enter-active {
    transition: all 0.25s ease 0.1s;
}

.modal-animation-inner-leave-active {
    transition: all 0.2s ease;
}

.modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.85);
}

.modal-animation-inner-leave-to {
    transform: scale(0.85);
}
</style>