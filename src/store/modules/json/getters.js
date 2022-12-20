export default{
    allItems:(state)=> {
        return state.items;
    },

    allICardtems:(state)=> {
        return state.cardItems;
    },
    allBlogItems:((state)=>{
        return state.blogs
    }),
    getFilteredHistory:((state)=>{
        return state.blogHistory
    })
}