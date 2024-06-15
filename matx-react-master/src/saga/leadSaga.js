import { call, put, takeEvery } from "redux-saga/effects";
import addLead, { AddEditInfo, deleteLead, editLead, getLead } from "services/leadService";
import {
    AddEditInfoError,
    AddEditInfoRequest,
    AddEditInfoSuc,
    deleteLeadError,
    deleteLeadLoading,
    deleteLeadSuccess,
    editLeadRequest,
    editLeadRequestError,
    editLeadRequestSuccess,
    getLeadError,
    getLeadLoading,
    getLeadSuccess,
    leadError,
    leadLoading,
    leadSuccess
}
    from "slice/leadSlice";

function* asyncLead(action) {
    try {
        let d = yield call(addLead, action.payload);

        yield put(leadSuccess(d));
    } catch (error) {
        yield put(leadError(error));
    }
}

export function* watcherLeadPost() {
    yield takeEvery(leadLoading().type, asyncLead);
}

function* asyncLeadGet() {
    try {
        let d1 = yield call(getLead);
        yield put(getLeadSuccess(d1));
    } catch (error) {
        yield put(getLeadError(error));
    }
}

export function* watcherLeadGet() {
    yield takeEvery(getLeadLoading().type, asyncLeadGet);
}

function* asyncLeadDelete(action) {
    try {
        let d1 = yield call(deleteLead,action.payload); 
        yield put(deleteLeadSuccess(d1));
    } catch (error) {
        yield put(deleteLeadError(error));
    }
}

export function* watcherLeadDelete() {
    yield takeEvery(deleteLeadLoading().type, asyncLeadDelete);
}


function* asyncLeadEdit(action) {
    try {
        let d1 = yield call(editLead,action.payload); 
        yield put(editLeadRequestSuccess(d1));
    } catch (error) {
        yield put(editLeadRequestError(error));
    }
}

export function* watcherLeadEdit() {
    yield takeEvery(editLeadRequest().type, asyncLeadEdit);
}

function* asyncLeadEditInfo(action) {
    try {
      let d1 = yield call(AddEditInfo, action.payload);
      yield put(AddEditInfoSuc(d1));
    } catch (error) {
      yield put(AddEditInfoError(error));
    }
  }
  
  export function* watcherLeadEditInfo() {
    yield takeEvery(AddEditInfoRequest().type, asyncLeadEditInfo);
  }