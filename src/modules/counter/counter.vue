<script lang="ts" setup>
import { useMediaQuery, useNow } from '@vueuse/core';
import { useCounterStore } from './counter.store';

const store = useCounterStore()
const isMobile = useMediaQuery('(max-width: 440px)')
const now = useNow()
</script>

<template>
  <div class="page-wrapper">
    <div class="content-wrapper">
      <n-space justify="center">
        <n-time :time="now" format="hh:mm:ss" class="time" />
      </n-space>
      <br>
      <br>
      <n-space item-style="flex:1 1 0">
        <n-card style="width: 100%">
          <n-statistic tabular-nums label="Actualmente"> 
            <n-space justify="center" class="timer timer-current">
              {{ store.countCurrent }}
            </n-space>
          </n-statistic>
        </n-card>

        <n-card style="width: 100%">
          <n-statistic tabular-nums label="En total"> 
            <n-space justify="center" class="timer timer-global">
              {{ store.countGlobal }}
            </n-space>
          </n-statistic>
        </n-card>
      </n-space>
      <br>
      <n-space vertical>
        <n-button class="button" secondary @click="store.increment">
          +1
        </n-button>
        <n-button class="button" secondary @click="store.decrement">
          -1
        </n-button>

        <n-space item-style="flex:1 1 0" :vertical="isMobile">
          <n-popconfirm
            positive-text="Reiniciar"
            negative-text="Cancelar"
            @positive-click="() => store.countCurrent = 0"
          >
            <template #trigger>
              <n-button tertiary style="width: 100%">
                Reiniciar el contador actual
              </n-button>
            </template>
            ¿Estás seguro/a de que quieres reiniciar el contador actual?
          </n-popconfirm>
          <n-popconfirm
            positive-text="Reiniciar"
            negative-text="Cancelar"
            @positive-click="() => store.countGlobal = 0"
          >
            <template #trigger>
              <n-button tertiary style="width: 100%">
                Reiniciar el contador global
              </n-button>
            </template>
            ¿Estás seguro/a de que quieres reiniciar el contador global?
          </n-popconfirm>
        </n-space>
      </n-space>
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
    max-width: 550px;
    margin: 0 auto;
  }


  .time {
    opacity: 0.6;
    font-size: 25px;
  }

.button {
  width: 100%;
  padding: 35px 0;
  font-size: 25px;
}
  .timer {
    font-size: 60px;

  }
}
</style>
