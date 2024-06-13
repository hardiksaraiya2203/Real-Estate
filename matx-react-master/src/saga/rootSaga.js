import { all } from "redux-saga/effects";
import {  watcherLeadDelete, watcherLeadEdit, watcherLeadGet, watcherLeadPost } from "./leadSaga";


function* rootSaga() {
  yield all([watcherLeadPost(),watcherLeadGet(),watcherLeadDelete(),watcherLeadEdit()]); 
}

export default rootSaga;