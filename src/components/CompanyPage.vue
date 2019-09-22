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
data() {
    return {
    //     companyName: "Microsoft",
    //     companyIcon: "squares.png",
    //     companyLocation: "Redmond, WA USA",
    //     companyDescription: "At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to criate.",
    //     activities: [
    //         {
    //             type: "replaced",
    //             dateTime: "8 days ago",
    //             icon: "video-platform.png",
    //             description: "Cloud Ochestration replaced Microsof on 1 property"
    //         },
    //         {
    //             type: "replaced",
    //             dateTime: "10 days ago",
    //             icon: "content-delivery.png",
    //             description: "Express Scripts replaced Microsof on 1 property"
    //         },
    //         {
    //             type: "replaced",
    //             dateTime: "12 days ago",
    //             icon: "waf-d-dos-security.png",
    //             description: "Kaiser Permanente replaced Microsof on 1 property"
    //         },
    //         {
    //             type: "replaced",
    //             dateTime: "14 days ago",
    //             icon: "waf-d-dos-security.png",
    //             description: "Molina Healthcare replaced Microsof on 1 property"
    //         },
    //         {
    //             type: "replaced",
    //             dateTime: "15 days ago",
    //             icon: "dns.png",
    //             description: "Express Scripts replaced Microsof on 1 property"
    //         },
    //         {
    //             type: "replaced",
    //             dateTime: "16 days ago",
    //             icon: "performance-monitoring.png",
    //             description: "Kaiser Permanente replaced Microsof on 1 property"
    //         },
    //         {
    //             type: "replaced",
    //             dateTime: "17 days ago",
    //             icon: "saas.png",
    //             description: "Molina Healthcare replaced Microsof on 1 property"
    //         },
    //         {
    //             type: "feature",
    //             dateTime: "18 days ago",
    //             icon: "content-delivery.png",
    //             description: "Microsof launched M-Cloud"
    //         }
    //     ]   
    // }
    }
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