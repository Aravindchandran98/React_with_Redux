const initState = {
    age : 20,
    history : []
}

const reducer = (state = initState, action) => {
    var tempState = {...state};

    switch (action.type) {
        case "Age-Up":
            // tempState.age += 1;
            return {
                ...state,
                age: tempState.age+1,
                history: tempState.history.concat({id:Math.random(),age:tempState.age+1})
            }
    
        case "Age-Down":
            return {
                ...state,
                age: tempState.age-1,
                history: tempState.history.concat({id:Math.random(),age:tempState.age-1})
            }

        case "Delete-List":
            return { 
                ...state,
                history: state.history.filter((value)=> value.id !== action.key)    
            }    
    }
    return tempState;
}

export default reducer;