<template>
    <h1>Mes réalisations</h1>

    <div class="projects">
        <div 
        v-for="project in projects" 
        :key="project.id" 
        class="project-card"
        >
        <img :src="project.icon" alt="project.title" class="project-icon">

        <h2>{{ project.title }}</h2>
        <button @click="openModal(project)">Voir</button>
        </div>
    </div>

    <!-- Modal UNIQUE -->
    <Modal 
        :modalActive="activeProject !== null" 
        @close="closeModal"
    >
        <div v-if="activeProject" class="modal-content">

        <h2>{{ activeProject.title }}</h2>

        <img :src="activeProject.image" alt="activeProject.title" class="modal-image">

        <p>{{ activeProject.description }}</p>
        
        <div class="modal-btn">
            <a :href="activeProject.demo" class="btn demo">
                Voir la démo
            </a>

            <a :href="activeProject.github" class="btn github">
                GitHub
            </a>
        </div>
        
        </div>
    </Modal>
</template>

<script>
import Modal from '../components/Modal.vue'
import { ref } from 'vue'

import meteoImg from "../assets/weather-app-img.png"
import cvImg from "../assets/CV-html.png"
import meteoIcon from "../assets/weather-app.png"
import cvIcon from "../assets/cv.png"

export default {
    name: "Project",
    components: { Modal },

    setup() {
        const projects = [
        {
            id: 1,
            title: "App Météo",
            description: "Application météo en HTML, CSS et JavaScript avec API. - 2026",
            image: meteoImg,
            icon: meteoIcon,
            demo: "https://userxxiixii.github.io/weather_app/",
            github: "https://github.com/userXXIIXII/weather_app" 
        },
        {
            id: 2,
            title: "CV HTML",
            description: "CV conçu avec HTML - 2024",
            image: cvImg,
            icon: cvIcon,
            demo: "https://userxxiixii.github.io/CV-CEF/",
            github: "https://github.com/userXXIIXII/CV-CEF"
        },
        ]

        const activeProject = ref(null)

        const openModal = (project) => {
        activeProject.value = project
        }

        const closeModal = () => {
        activeProject.value = null
        }

        return {
        projects,
        activeProject,
        openModal,
        closeModal
        }
    }
}
</script>

<style scoped>
.projects {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.project-card {
    background: #242629;
    padding: 20px;
    border-radius: 8px;
    width: 200px;
}

button {
    margin-top: 10px;
    cursor: pointer;
}

.project-icon {
    height: 150px;
}

.modal-image {
    height: 400px;
    border-radius: 5px;
}

.modal-btn {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 12px 18px;
  border-radius: 8px;
  text-decoration: none;
}

/* bouton démo */
.btn.demo {
  background: #7f5af0;
  color: white;
}

/* bouton github */
.btn.github {
  background: transparent;
  border: 2px solid #7f5af0;
  color: #7f5af0;
}

/* hover */
.btn:hover {
  transform: translateY(-2px);
}

.btn.demo:hover {
  background: #6c4de0;
}

.btn.github:hover {
  background: #7f5af0;
  color: white;
}
</style>