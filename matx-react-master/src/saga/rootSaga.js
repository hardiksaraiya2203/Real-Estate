import { all } from "redux-saga/effects";
import {  watcherLeadDelete, watcherLeadEdit, watcherLeadEditInfo, watcherLeadGet, watcherLeadPost } from "./leadSaga";


function* rootSaga() {
  yield all([watcherLeadPost(),watcherLeadGet(),watcherLeadDelete(),watcherLeadEdit(),watcherLeadEditInfo()]); 
}

export default rootSaga;