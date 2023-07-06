Vue.component('mapping', {

    template: `
    <div class="mx-auto bg-gray-100 p-4">

        <h1>Mapping Settings</h1>

        <button v-if="!enabled" class="bg-green-500 text-white p-2 my-2 rounded hover:bg-green-600" v-on:click="toggleEnabled()">Enable Custom Map</button>
        <button v-if="enabled" class="bg-red-500 text-white p-2 my-2 rounded hover:bg-red-600" v-on:click="toggleEnabled()">Disable Custom Map</button><br>

        <div v-if="enabled">

            <label for="mapSvg">Map SVG:</label><br>
            <textarea @input="onInput($event)" :value="mapSvg" name="mapSvg" rows="4" cols="50"></textarea><br>

            <button class="bg-green-500 text-white p-2 my-2 rounded hover:bg-green-600" v-on:click="loadMapFromSVG()">Load Map From SVG</button><br>
            <p class="text-sm text-gray-700 italic">WARNING: If you click this all your states and anything referencing your states will be deleted from your code 2 and replaced from what the tool gets from your SVG. You should only be doing this once when starting to make the mod.</p>

        </div>

    </div>
    `,

    methods: {

        loadMapFromSVG: function() {
            Vue.prototype.$TCT.loadMap();
            Vue.prototype.$globalData.state = Object.keys(Vue.prototype.$TCT.states)[0];
            alert("Custom map SVG loaded in. If there were any errors they are in the console. Check your states dropdown to confirm it is working.")
            Vue.prototype.$globalData.mode = STATE;
            const temp = Vue.prototype.$globalData.filename;
            Vue.prototype.$globalData.filename = "";
            Vue.prototype.$globalData.filename = temp;
        },

        toggleEnabled: function(evt) {
            Vue.prototype.$TCT.jet_data.mapping_enabled = !Vue.prototype.$TCT.jet_data.mapping_enabled;

            const temp = Vue.prototype.$globalData.filename;
            Vue.prototype.$globalData.filename = "";
            Vue.prototype.$globalData.filename = temp;
        },

        onInput: function(evt) {
            Vue.prototype.$TCT.jet_data.mapping_data[evt.target.name] = evt.target.value;
        },
        
    },

    computed: {

        mapSvg: function() {
            return Vue.prototype.$TCT.jet_data.mapping_data.mapSvg;
        },

        enabled: function() {
            if(Vue.prototype.$TCT.jet_data.mapping_enabled == null) {
                Vue.prototype.$TCT.jet_data.mapping_enabled = false;
            }

            if(Vue.prototype.$TCT.jet_data.mapping_data == null) {
                Vue.prototype.$TCT.jet_data.mapping_data = {};
            }

            const temp = Vue.prototype.$globalData.filename;
            Vue.prototype.$globalData.filename = "";
            Vue.prototype.$globalData.filename = temp;

            return Vue.prototype.$TCT.jet_data.mapping_enabled;
        }
    }
})