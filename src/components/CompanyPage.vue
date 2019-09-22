<template>
  <div class="company-page">
      <div>
          <div>
            <img :src="require('../images/zeplin-assets/company-page/' + companyIcon)" >
            <div>
                <h5>{{ companyName }}</h5>
                <p>{{ companyLocation }}</p>
          </div>
          </div>
            <p>{{ companyDescription }} <a href="">View More...</a></p> 
          <div>
        </div>         
      </div>

      <div class="all-cards">
        <details-card title="activites">
            <ul>
                <li
                class="activities-item" 
                v-for="(item, index) in activities" 
                :key="index">
                    <h5 class="activities-date">{{ item.dateTime }}</h5>
                    <img :src="require('../images/zeplin-assets/company-page/' + item.icon)">
                    <p class="activities-description"> {{ item.description }}</p>
                </li>
            </ul>
        </details-card>
        <details-card  title="similar companies">
            <div class="space">

            </div>
        </details-card>
        <details-card title="company spend history">
            <div class="space">

            </div>
        </details-card>
        <details-card  title="company spend history">
            <div class="space">

            </div>
        </details-card>
      </div>   
  </div>
</template>

<script>
import DetailsCard from "./DetailsCard.vue";
import { mapGetters } from "vuex";

export default {
components: {
    DetailsCard
},
computed: {
    ...mapGetters ('companyInformation', [
        "companyName",
        "companyIcon",
        "companyLocation",
        "companyDescription",
        "activities"
    ])
}
}
</script>

<style scoped>
.all-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
}
.card:nth-child(1) {
    grid-row: 1 / 4;
}
.activities-item {
    display: grid;
    list-style: none;
    grid-template-columns: 2fr 1fr 3fr;
}
.company-page {
    width: 100%;
}

</style>