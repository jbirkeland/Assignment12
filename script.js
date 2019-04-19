Vue.component('postcards-component', {
    props: ['rank', 'location', 'year', 'landmark', 'description'],
    template:`
        <tr>
            <td>{{rank}}</td>
            <td>{{location}}</td>
            <td>{{year}}</td>
            <td>{{landmark}}</td>
            <td>{{description}}</td>
        </tr>`
});

var myVue = new Vue({
    el: "#app",
    data: {
        rankInput: "",
        locationInput: "",
        yearInput: "",
        landmarkInput: "",
        descriptionInput: "",
        postcards: [
            {
                rank: 1,
                location: "San Diego",
                year: 2019,
                landmark: "Sunset Cliffs",
                description: "Architecture and scenery from the cliffs",
            },
            {
                rank: 2,
                location: "Arizona",
                year: 2002,
                landmark: "Grand Canyon",
                description: "Best family vacation ever",
            },
            {
                rank: 3,
                location: "Banff",
                year: 1995,
                landmark: "Chateau Lake Louise",
                description: "On the shores of Lake Louise",
            },
            {
                rank: 4,
                location: "Bar Harbor",
                year: 2017,
                landmark: "Acadia National Park",
                description: "You have to try the lobster pizza",
            },
            {
                rank: 5,
                location: "North Shore",
                year: 1999,
                landmark: "Split Rock Lighthouse",
                description: "The lighthouse sits majestically on the cliff",
            }
        ]
    },
    methods: {
        //removeInformation: function(informationObject){
            //this.postcards = this.postcards.filter(function(information){
                //if (information.rank !== informationObject.rank) {
                    //return true;
                //} else {
                    //return false;
                //}
            //})
        //},
        addInformation: function() {
            let newInformation = {
                rank: this.rankInput,
                location: this.locationInput,
                year: this.yearInput,
                landmark: this.landmarkInput,
                description: this.descriptionInput
            };
            this.postcards.push(newInformation);
            this.rankInput = this.locationInput = this.yearInput = this.landmarkInput = this.descriptionInput = "";
        }
    }
});