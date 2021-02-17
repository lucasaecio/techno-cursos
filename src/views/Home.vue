<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="apiResponse" class="conteudo">
        <div>
          <h1>Sobre a {{apiResponse.titulo}}</h1>
          <p>{{apiResponse.descricao}}</p>
          <router-link class="btn-cursos" tag="button" to="/cursos">Cursos</router-link>

          <div>
            <h2>Avaliações</h2>
            <ul >
              <li v-for="avaliacao in apiResponse.avaliacoes" :key="avaliacao.nome">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>
        <img src="@/assets/aprender.png" alt="Aprenda Web Design"/>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import PageLoading from '../components/pageLoading.vue';

export default {
  components: { PageLoading },
  name: "home",
  mixins: [fetchData],
  created() {
    this.fetchData("/home")
  }
};
</script>

<style scoped>
.btn-cursos {
  display: inline-block;
  border: none;
  background: #4b8;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  font-size: 1rem;
  margin-top: 20px !important;
  margin-bottom: 20px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
</style>