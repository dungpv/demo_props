import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import BaiTapGameXucXacReducer from "./BaiTapXucXacReducer";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import BaiTapDatVeReducer from "./BaiTapDatVeReducer";

const rootReducer = combineReducers({
  // store tong cua ung dung
  stateGioHang: BaiTapGioHangReducer,
  BaiTapGameXucXacReducer: BaiTapGameXucXacReducer,
  BaiTapOanTuXiReducer: BaiTapOanTuXiReducer,
  BaiTapDatVeReducer: BaiTapDatVeReducer,
});
export default rootReducer;
