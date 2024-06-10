import { all } from "redux-saga/effects";
import {  watcherLeadGet, watcherLeadPost } from "./leadSaga";


function* rootSaga() {
  yield all([watcherLeadPost(),watcherLeadGet()]); 
}

export default rootSaga;