<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="apiResponse">
        <h1>{{apiResponse.titulo}}</h1>
        <p>{{apiResponse.descricao}}</p>
        <ul>
          <li>
            <b>Email: </b>
            <span>{{apiResponse.contato.email}}</span>
          </li>
          
          <li>
            <b>Telefone: </b>
            <span>{{apiResponse.contato.telefone}}</span>
          </li>
          
          <li>
            <b>Endereço: </b>
            <span>{{apiResponse.contato.endereco}}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

export default {
  name: "contato",
  mixins: [fetchData],
  created() {
    this.fetchData("/contato")
  }
};
</script>