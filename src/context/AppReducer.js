export default (state,action)=>{
    switch(action.type){
        case 'ADD_TRANSACTION':
        return{
            ...state,
            transactions:action.payload

        }

        default:
            return state;
    }
}