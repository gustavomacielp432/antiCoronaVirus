<template>
    <div class ="titulo-pagina">
     <h1><i v-if="icon" :class="icon"></i> {{ main }}</h1>
        <h2>{{ sub }}</h2>
        <hr>
    </div>
</template>


<script>
export default {
    name:'TituloDaPagina',
    props:['icon','main','sub']
}
</script>



<style>
    .page-title h1{
        margin: 0px;
    }
.page-page h2{
    color:#777;
    margin-top:5px;
    font-size: 1.3rem;
}

</style>