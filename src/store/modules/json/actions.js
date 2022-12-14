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



    async getAllBlogs ({ commit }) {
        try {
            const res = await axios.get(`http://localhost:3000/blogsData`);
            console.log("blogData===>",res.data)
            commit('setAllBlogData', res.data)

        } catch (error) {
            console.log(error);
        }
    },


    async addBlogsData({commit},payload) {
        try{
            const res = await axios.post(`http://localhost:3000/blogsData`, {...payload});
            console.log(payload)
            commit('setBlogsData', res.data)
        } catch (error){
            console.log(error);
        }
    },

    async deleteBlog({commit},id){
        try{
            const res1 = await axios.get(`http://localhost:3000/blogsData`);
            const res = await axios.delete(`http://localhost:3000/blogsData/${id}`);
            console.log("action id",id)
            console.log("action data",res1.data)
            res1.data = res1.data.filter((items) => items.id !== id)
            commit('setAllBlogData', res1.data)
        }catch (error){
            console.log(error)
        }
    }
}