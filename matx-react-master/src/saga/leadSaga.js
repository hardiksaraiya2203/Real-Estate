import { call, put, takeEvery } from "redux-saga/effects";
import addLead, { getLead } from "services/leadService";
import {
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