import {FETCH_HISTORICAL_REQUEST} from "./reducer";

export const fetchProgressPlayer = (accountId, mode) => ({
	type: FETCH_HISTORICAL_REQUEST,
	accountId,
	mode,
	requestName: FETCH_HISTORICAL_REQUEST
})