import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "saga/rootSaga";
import leadSlice from "slice/leadSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore( {
    reducer: {
        lead: leadSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;