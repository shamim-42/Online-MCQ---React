import { createStore, compose } from 'redux';
import rootReducer from 'redux/reducers/rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    // whitelist: [],
    blacklist: [],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export let store = createStore(persistedReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export let persistor = persistStore(store);