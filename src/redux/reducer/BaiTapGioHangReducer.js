const stateGioHang = {
  gioHang: [],
};

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let index = state.gioHang.findIndex(
        (spGH) => spGH.maSP === action.spGioHang.maSP
      );
      if (index !== -1) {
        state.gioHang[index].soLuong += 1;
      } else {
        state.gioHang.push(action.spGioHang);
      }

      state.gioHang = [...state.gioHang];

      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];
      // tim ra phan tu can xoa dua vao ma SP
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        gioHangCapNhat.splice(index, 1);
      }
      // cap nhat lai state moi
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state.gioHang];
      // xu ly tang giam tren gio hang
      let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === action.maSP);
      if (index !== -1) {
        if (action.tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
          } else {
            alert("Số lượng tối thiểu ít nhất là 1!");
          }
        }
      }

      // cap nhat lai state moi
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapGioHangReducer;
