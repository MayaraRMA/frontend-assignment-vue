export default {
    namespaced: true,
    state: {
        companyName: "Microsoft",
        companyIcon: "squares.png",
        companyLocation: "Redmond, WA USA",
        companyDescription: "At Microsoft, our mission is to empower every person and every organization on the planet to achieve more. Our mission is grounded in both the world in which we live and the future we strive to criate.",
        activities: [
            {
                type: "replaced",
                dateTime: "8 days ago",
                icon: "video-platform.png",
                description: "Cloud Ochestration replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "10 days ago",
                icon: "content-delivery.png",
                description: "Express Scripts replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "12 days ago",
                icon: "waf-d-dos-security.png",
                description: "Kaiser Permanente replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "14 days ago",
                icon: "waf-d-dos-security.png",
                description: "Molina Healthcare replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "15 days ago",
                icon: "dns.png",
                description: "Express Scripts replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "16 days ago",
                icon: "performance-monitoring.png",
                description: "Kaiser Permanente replaced Microsof on 1 property"
            },
            {
                type: "replaced",
                dateTime: "17 days ago",
                icon: "saas.png",
                description: "Molina Healthcare replaced Microsof on 1 property"
            },
            {
                type: "feature",
                dateTime: "18 days ago",
                icon: "content-delivery.png",
                description: "Microsof launched M-Cloud"
            }
        ]   
    },
    getters: {
        companyName: state => state.companyName,
        companyIcon: state => state.companyIcon,
        companyLocation: state => state.companyLocation,
        companyDescription: state => state.companyDescription,
        activities: state => state.activities
    }
}