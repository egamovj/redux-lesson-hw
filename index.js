// iceCream, cheeseCake, chocolateCake action creatorlar yaratasiz, va shularni chaqirib ishlatganda numofIceCream, numOfcheeseCake, numOfChocolate larni qo'shish yoki o'chirish kerak. Js ni o'zida qilsangiz.

const redux = require('redux');
const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED"; // classroom lesson
const RESTOCK_CAKE = "RESTOCK_CAKE"; // classroom lesson
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED"; // homework added iceCream
const CHEESE_CAKE_ORDERED = "CHEESE_CAKE_ORDERED"; // homework added cheeseCake
const CHOCOLATE_CAKE_ORDERED = "CHOCOLATE_CAKE_ORDERED"; // homework added chocolateCake
const RESTOCK_ICE_CREAM = "RESTOCK_ICE_CREAM"; // homework added
const RESTOCK_CHEESE_CAKE = "RESTOCK_CHEESE_CAKE"; // homework added
const RESTOCK_CHOCOLATE_CAKE = "RESTOCK_CHOCOLATE_CAKE"; // homework added

// classroom lesson
function orderCake(quantity = 1) { 
    return {
        type: CAKE_ORDERED,
        payload: quantity
    }
}

// classroom lesson
function resStock(quantity = 1) {
    return {
        type: RESTOCK_CAKE,
        payload: quantity
    }
}

// homework added
function orderIceCream(quantity = 1) {
    return {
        type: ICE_CREAM_ORDERED,
        payload: quantity
    };
}

// homework added
function orderCheeseCake(quantity = 1) {
    return {
        type: CHEESE_CAKE_ORDERED,
        payload: quantity
    };
}

// homework added
function orderChocolateCake(quantity = 1) {
    return {
        type: CHOCOLATE_CAKE_ORDERED,
        payload: quantity
    };
}

// homework added
function restockIceCream(quantity = 1) {
    return {
        type: RESTOCK_ICE_CREAM,
        payload: quantity
    };
}

// homework added
function restockCheeseCake(quantity = 1) {
    return {
        type: RESTOCK_CHEESE_CAKE,
        payload: quantity
    };
}

// homework added
function restockChocolateCake(quantity = 1) {
    return {
        type: RESTOCK_CHOCOLATE_CAKE,
        payload: quantity
    };
}

const initialState = {
    numOfCakes: 13,
    numOfIceCream: 5, // homework added numOfIceCream
    numOfCheeseCake: 10, // homework added numOfCheeseCake
    numOfChocolateCake: 20, // homework added numOfChocolateCake
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            };
        case ICE_CREAM_ORDERED:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + action.payload
            };
        case CHEESE_CAKE_ORDERED:
            return {
                ...state,
                numOfCheeseCake: state.numOfCheeseCake + action.payload
            };
        case CHOCOLATE_CAKE_ORDERED:
            return {
                ...state,
                numOfChocolateCake: state.numOfChocolateCake + action.payload
            };
        case RESTOCK_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case RESTOCK_ICE_CREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload
            };
        case RESTOCK_CHEESE_CAKE:
            return {
                ...state,
                numOfCheeseCake: state.numOfCheeseCake - action.payload
            };
        case RESTOCK_CHOCOLATE_CAKE:
            return {
                ...state,
                numOfChocolateCake: state.numOfChocolateCake - action.payload
            };
        default:
           return state
    }
}

const store = createStore(reducer);

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("Ipdated state", store.getState());
});

store.dispatch(orderIceCream(2));
store.dispatch(orderCheeseCake(3));
store.dispatch(orderChocolateCake(1));
store.dispatch(resStock());
store.dispatch(restockIceCream());
store.dispatch(restockCheeseCake());
store.dispatch(restockChocolateCake());

unsubscribe();