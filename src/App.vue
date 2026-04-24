<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Project from "./components/Project.vue"
import Contact from "./components/Contact.vue"
</script>

<template>
  <Header />

  <main>

    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>

    <section id="project">
      <Project />
    </section>

    <section id="contact">
      <Contact />
    </section>

    <Footer />
  </main>
</template>
