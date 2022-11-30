import axios from "axios";

export default {
    async getAllItems ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/items`);
            commit('setAllItems',res.data)

        } catch (error) {
            console.log(error);
        }
    },

    async getAllCardItems ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/tipsCardData`);
            console.log("data2===>",res.data)
            commit('setAllCardItems',res.data)

        } catch (error) {
            console.log(error);
        }
    },
}