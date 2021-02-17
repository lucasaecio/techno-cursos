<template>
<div>
    <div v-if="loading">
        <page-loading/>
    </div>
    
    <transition name="fade" mode="out-in">
        <div v-if="apiResponse" class="conteudo">
            <div>
                <h1>{{apiResponse.nome}}</h1>
                <p>{{apiResponse.descricao}}</p>
                <h2>Aulas</h2>
                <ul class="aulas">
                    <li v-for="aula in apiResponse.aulas" :key="aula.id">
                        
                        <router-link :to="{name: 'aula', params: {aula: aula.id}}">{{aula.nome}}</router-link>
                    </li>
                </ul>
            </div>

            <router-view></router-view>
        </div>
    </transition>
</div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'
import pageLoading from '../components/pageLoading.vue'

export default {
  components: { pageLoading },
    name: "curso",
    props: { curso: String },
    mixins: [fetchData],
    created () {
        this.fetchData(`/curso/${this.curso}`)
    }
}
</script>

<style>
.aulas li a{
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.aulas li a.router-link-active {
    background: #4b8;
    color: white;
}
</style>