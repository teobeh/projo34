<template>
  <div class="fullpage-centered">
    <n-grid cols="10" item-responsive>
      <n-grid-item span="10 600:8 1024:6 1280:4 2000:2" offset="0 600:1 1024:2 1280:3 2000:4" class="card-wrapper">
        <n-card class="main-card">
          <n-h1>Acerca de</n-h1>
          <n-p>
            Projo es una aplicación web fácil de usar para la gestión de puntuaciones en el teatro de improvisación. No se necesita una cuenta o instalación para utilizar esta aplicación, todo se realiza en el navegador.
          </n-p>

          <n-p>
            Aplicación de código abierto desarrollada con <n-text type="error">♥</n-text> por <a href="https://github.com/CorentinTh" target="_blank">Corentin Thomasset</a>.
          </n-p>

          <n-p>
            Hecho con <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a> utilizando los componentes de <a href="https://www.naiveui.com/" target="_blank">naive-ui</a>.
          </n-p>

          <n-h2>Soporte</n-h2>
          <n-p>
            Para apoyar este proyecto gratuito y de código abierto, puedes respaldarme
            <a
              tag="a"
              target="_blank"
              href="https://github.com/sponsors/CorentinTh"
            >haciendo una donación</a>.
          </n-p>


          <n-space>
            <router-link to="/" #="{ navigate, href }" custom>
              <n-button
                tag="a"
                :href="href"
                secondary
                @click="navigate"
              >
                Volver
              </n-button>
            </router-link>
            <n-button
              tag="a"
              target="_blank"
              type="success"
              href="https://github.com/sponsors/CorentinTh"
            >
              Hacer una donación
            </n-button>
          </n-space>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<style scoped lang="less">
.fullpage-centered {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #f5f5fb;
  padding: 15px;
  overflow-x: hidden;
}

.n-h1 {
  font-size: 40px;
  line-height: 1;
  opacity: 0.8;
}

.main-card {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 20px;
  padding: 40px;
}

.n-p {
  a {
    color: #3f5efb;
    text-decoration: none;
    opacity: 0.8;
    transition: all 0.3s linear;

    &:hover {
      color: #fc466b;
    }
  }
}
</style>
