<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="apiResponse" class="conteudo">
        <div>
          <h1>{{apiResponse.titulo}}</h1>
          <p>{{apiResponse.descricao}}</p>
        </div>
        
        <ul>
          <li v-for="curso in apiResponse.cursos" :key="curso.id">
            <h2>
              <router-link :to="{name: 'curso', params: {curso: curso.id}}">
                {{curso.nome}} - {{curso.totalAulas}} aulas | {{curso.horas}} horas
              </router-link>
            </h2>
            <p>{{curso.descricao}}</p>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: "cursos",
  mixins: [fetchData],
  created() {
    this.fetchData("/cursos")
  }
};
</script>
