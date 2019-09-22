<template>
  <div class="company-page">
      <div class="all-cards">
          <details-card title="activites">
          <ul>
              <li v-for="item in activities" :key="item">
                  <h5>{{ item.dateTime }}</h5>
                  <img src="" alt="">
                  <p> {{ item.description }}</p>
              </li>
          </ul>
        </details-card>
        <details-card title="similar companies"></details-card>
        <details-card title="company spend history"></details-card>
        <details-card title="company spend history">
            <!-- <ul>
                <li>
                    <img src="" alt="">
                    <div>
                        <h5>{{ productName }}</h5>
                        <p>{{ productDetails }}</p>
                    </div>
                </li>
            </ul> -->
        </details-card>
      </div>   
  </div>
</template>

<script>
import DetailsCard from "./DetailsCard.vue";

export default {
components: {
    DetailsCard
},
data() {
    return {
        activities: [
            {
                type: "replaced",
                dateTime: "8 days ago",
                img: "",
                description: "Cloud Ochestration replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "10 days ago",
                img: "",
                description: "Express Scripts replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "12 days ago",
                img: "",
                description: "Kaiser Permanente replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "14 days ago",
                img: "",
                description: "Molina Healthcare replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "15 days ago",
                img: "",
                description: "Express Scripts replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "16 days ago",
                img: "",
                description: "Kaiser Permanente replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "17 days ago",
                img: "",
                description: "Molina Healthcare replaced Microsof on 1 property"
            },
            {
                type: "feature",
                dateTime: "18 days ago",
                img: "",
                description: "Microsof launched M-Cloud"
            }
        ]   
    }
},
}
</script>

<style scoped>
.company-page {
    width: 100%;
}
</style>