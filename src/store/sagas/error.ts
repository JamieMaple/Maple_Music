import { call } from 'redux-saga/effects'

function errorHandler(action) {
  console.log("Error: ", action.message)
  console.log(action)
}

export default function* errorWorker(action) {
  yield call(errorHandler, action.payload)
}
