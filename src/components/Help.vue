<template>
  <div class="container white pa-0">
    <div style="height:60px"></div>

    <div class="text-center pa-3 pt-4">
      <span class="title font-weight-regular">
        Em possiveis casos de contaminação entre em contato, através dos
        telefones:
      </span>
    </div>
    <div class="text-center pb-2">
      <v-flex class="pb-3">
        <v-btn large class="checkin-text" href="tel:31985558290">
          <v-icon class="checkin-text">mdi-phone</v-icon>
          <span class="font-weight-regular title pl-2">(31) 98555-8290</span>
        </v-btn>
      </v-flex>
      <v-flex class="pb-3">
        <v-btn large class="colorBtn" href="https://api.whatsapp.com/send?phone=5531971277538">
          <v-icon left>mdi-whatsapp</v-icon>
          <span class="font-weight-regular title">Whatsapp 24h</span>
        </v-btn>
      </v-flex>
    </div>

    <v-divider class="mx-3 my-4"></v-divider>

    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(pergunta, i) in perguntas" :key="i">
        <v-expansion-panel-header>{{ pergunta.p }}</v-expansion-panel-header>
        <v-expansion-panel-content justify="center">{{ pergunta.r }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perguntas: [
        {
          p: "O que é COVID-19?",
          r:
            "A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que apresenta um quadro clínico que varia de infecções assintomáticas a quadros respiratórios graves. De acordo com a Organização Mundial de Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%) podem ser assintomáticos e cerca de 20% dos casos podem requerer atendimento hospitalar por apresentarem dificuldade respiratória e desses casos aproximadamente 5% podem necessitar de suporte para o tratamento de insuficiência respiratória (suporte ventilatório)."
        },
        {
          p: "O que é o coronavírus?",
          r:
            "Coronavírus é uma família de vírus que causam infecções respiratórias. O novo agente do coronavírus foi descoberto em 31/12/19 após casos registrados na China. Provoca a doença chamada de coronavírus (COVID-19).Os primeiros coronavírus humanos foram isolados pela primeira vez em 1937. No entanto, foi em 1965 que o vírus foi descrito como coronavírus, em decorrência do perfil na microscopia, parecendo uma coroa.A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectar com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63 e beta coronavírus OC43, HKU1."
        },
        {
          p: "Quais são os sintomas?",
          r:
            'A doença pelo Coronavírus (COVID-19) é similar a uma "gripe". Geralmente é uma doença leve ou moderada, mas alguns casos podem ficar graves, como o de uma pneumonia severa. \r Os sintomas mais comuns são: Tosse, Febre, Congestão nasal, Corrimento nasal, Dor de garganta, Dificuldade para respirar. Algumas pessoas podem apresentar: Cansaço, Dores no corpo, Mal estar em geral, Dores no peito. Esses sintomas geralmente são leves e começam gradualmente. A maioria dos casos sintomáticos são considerados leves (cerca de 80% deles) e a pessoa se recupera bem da doença. Porém aproximadamente 1 a cada 6 pessoas que adoecem pode apresentar a forma grave da doença.'
        },
        {
          p: "Como é transmitido?",
          r:
            "A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de: Toque do aperto de mão, Gotículas de saliva, Espirro, Tosse, Catarro, Objetos ou superfícies contaminadas, como celulares, mesas, maçanetas, brinquedos, teclados de computador, entre outros."
        },
        {
          p: "Como se proteger?",
          r:
            "As recomendações de prevenção à COVID-19 são as seguintes: Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%, Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos, Evite tocar olhos, nariz e boca com as mãos não lavadas, Ao tocar, lave sempre as mãos como já indicado, Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando, Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto, Higienize com frequência o celular e os brinquedos das crianças, Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos, Mantenha os ambientes limpos e bem ventilados, Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas. Se puder, fique em casa, Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos, e fique em casa até melhorar, Durma bem e tenha uma alimentação saudável, Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência."
        },
        {
          p: "Quando procurar atendimento?",
          r:
            "Pessoas com febre, tosse e dificuldade em respirar devem procurar atendimento médico imediato."
        },
        {
          p: "Como é feito o diagnóstico?",
          r:
            "O diagnóstico da COVID-19 é realizado primeiramente pelo profissional de saúde que deve avaliar a presença de critérios clínicos: Pessoa com quadro respiratório agudo, caracterizado por sensação febril ou febre, que pode ou não estar presente na hora da consulta (podendo ser relatada ao profissional de saúde), acompanhada de tosse OU dor de garganta OU coriza OU dificuldade respiratória, o que é chamado de Síndrome Gripal. Pessoa com desconforto respiratório/dificuldade para respirar OU pressão persistente no tórax OU saturação de oxigênio menor do que 95% em ar ambiente OU coloração azulada dos lábios ou rosto, o que é chamado de Síndrome Respiratória Aguda Grave Caso o paciente apresente os sintomas, o profissional de saúde poderá solicitar exame laboratoriais: De biologia molecular (RT-PCR em tempo real) que diagnostica tanto a COVID-19, a Influenza ou a presença de Vírus Sincicial Respiratório (VSR). Imunológico (teste rápido) que detecta, ou não, a presença de anticorpos em amostras coletadas somente após o sétimo dia de início dos sintomas. O diagnóstico da COVID-19 também pode ser realizado a partir de critérios como: histórico de contato próximo ou domiciliar, nos últimos 7 dias antes do aparecimento dos sintomas, com caso confirmado laboratorialmente para COVID-19 e para o qual não foi possível realizar a investigação laboratorial específica, também observados pelo profissional durante a consulta."
        },
        {
          p: "O que fazer se eu ficar doente?",
          r:
            "Caso você se sinta doente, com sintomas de gripe, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos e fique em casa por 14 dias. Só procure um hospital de referência se estiver com falta de ar. Em caso de diagnóstico positivo para COVID-19, siga as seguintes recomendações: Fique em isolamento domiciliar. Utilize máscara o tempo todo. Se for preciso cozinhar, use máscara de proteção, cobrindo boca e nariz todo o tempo. Depois de usar o banheiro, nunca deixe de lavar as mãos com água e sabão e sempre limpe vaso, pia e demais superfícies com álcool ou água sanitária para desinfecção do ambiente. Separe toalhas de banho, garfos, facas, colheres, copos e outros objetos apenas para seu uso. O lixo produzido precisa ser separado e descartado. Sofás e cadeiras também não podem ser compartilhados e precisam ser limpos frequentemente com água sanitária ou álcool 70%. Mantenha a janela aberta para circulação de ar do ambiente usado para isolamento e a porta fechada, limpe a maçaneta frequentemente com álcool 70% ou água sanitária. Caso o paciente não more sozinho, os demais moradores da devem dormir em outro cômodo, longe da pessoa infectada, seguindo também as seguintes recomendações: Manter a distância mínima de 1 metro entre o paciente e os demais moradores. Limpe os móveis da casa frequentemente com água sanitária ou álcool 70%. Se uma pessoa da casa tiver diagnóstico positivo, todos os moradores ficam em isolamento por 14 dias também. Caso outro familiar da casa também inicie os sintomas leves, ele deve reiniciar o isolamento de 14 dias. Se os sintomas forem graves, como dificuldade para respirar, ele deve procurar orientação médica."
        },
        {
          p: "Existe vacina ou remédios para a Covid-19 (coronavírus)? ",
          r:
            "Até o momento, não há vacina disponível contra o COVID-19. Contudo já existe tratamento disponível que evita o agravamento da doença e reduz o desconforto mas ainda não há medicamento específico para eliminar o novo coronavírus."
        }
      ]
    };
  },
  mounted() {
    console.log(this.perguntas.cadastro);
  }
};
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0px;
  z-index: 1;
}
.colorSelectedBack {
  background-color: var(--secondary-color);
}
.sizeTop {
  height: 48px;
}

.bottom {
  margin-bottom: 60px;
}

.container {
  position: relative;
  height: 100vh;
}

.checkin-text {
  color: var(--secondary-color);
  text-decoration: none;
  text-transform: none;
}

.colorBtn {
  text-decoration: none;
  text-transform: none;
  color: var(--primary-color) !important;
}
</style>
