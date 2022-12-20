import store from "../../index.js";

export default{
    setAllItems:(state,payloads)=> {
        state.items = payloads;
    },
    setAllCardItems:(state,payloads)=>{
        state.cardItems = payloads
    },
    setAllBlogData:(state,payloads)=>{
        state.blogs = payloads
    },
    setBlogsData:(state,payloads)=>{
        state.blogs.push(payloads)
    },
    AllHistory:(state,historyId)=>{
        const filteredHistory= state.blogs.find(history=>{
            console.log("histy",history)
            console.log("id",historyId)
            console.log("consition",history.id == historyId)
            return history.id == historyId
        })
        console.log("filter",filteredHistory)
        store.state.blogHistory = filteredHistory
    }
}