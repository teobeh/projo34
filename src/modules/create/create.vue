<script lang="ts" setup>
import ImproList from '@/modules/shared/components/ImproList.vue';
import ImproEditor from '../shared/components/ImproEditor.vue';
import { useCreateStore } from './create.store';
import { ref } from 'vue';

const store = useCreateStore()
const closed = ref(false)
</script>

<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <n-space align="center" justify="space-between">
        <n-h1>Creación de las improvisaciones</n-h1>
      </n-space>

      <n-card
        v-if="!closed"
        title="Creación"
        class="raised content-no-padding"
        closable
        @close="closed = true"
      >
        <p>
          Esta página permite crear y generar las improvisaciones para el arbitraje de un partido de improvisación. Una vez creada la lista de improvisaciones, es posible exportarla para el arbitraje (o modificarla posteriormente al volver a importarla).
        </p>
        <n-alert
          title="Realiza una copia de seguridad"
          type="warning"
        >
          La lista de improvisaciones se guarda localmente, pero por precaución, realiza copias de seguridad entre tus sesiones de escritura utilizando el archivo de exportación/importación.
        </n-alert>
      </n-card>
      <br>
      <n-grid
        cols="5"
        x-gap="12"
        y-gap="12"
        item-responsive
        responsive="screen"
      >
        <n-gi span="5 s:2">
          <n-card>
            <ImproEditor :edit="false" @added="(impro) => store.impros.push(impro)" />
          </n-card>
        </n-gi>
        <n-gi span="5 s:3">
          <n-card embedded>
            <ImproList v-model:impros="store.impros" :show-create="false" />
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<style scoped lang="less">
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5fb;
  padding: 60px 25px;
  box-sizing: border-box;

  .content-wrapper {
    max-width: 1300px;
    margin: 0 auto;
  }
}
</style>
