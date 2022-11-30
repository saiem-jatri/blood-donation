export default{
    setAllItems:(state,payloads)=> {
        state.items = payloads;
    },
    setAllCardItems:(state,payloads)=>{
        state.cardItems = payloads
    }
}