const stateDefaut = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/gameOanTuXi/keo.png",
      datCuoc: false,
    },
    {
      ma: "bua",
      hinhAnh: "./img/gameOanTuXi/bua.png",
      datCuoc: false,
    },
    {
      ma: "bao",
      hinhAnh: "./img/gameOanTuXi/bao.png",
      datCuoc: true,
    },
  ],
  ketQua: "I'm iron man, i love you 3000!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "bao",
    hinhAnh: "./img/gameOanTuXi/bao.png",
  },
};

const BaiTapOanTuXiReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangCuocUpdate = [...state.mangDatCuoc];
      // tao ra mang cuoc moi tu mang cuoc cu va action. maCuoc do nguoi dung truyen len
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo": {
          if (computer.ma === "keo") {
            state.ketQua = "Hòa nhau !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua sml !!!";
          } else {
            state.ketQua = "I'm iron man, i love you 3000!!";
            state.soBanThang += 1;
          }
        }
        case "bua":
          {
            if (computer.ma === "keo") {
              state.ketQua = "I'm iron man, i love you 3000!!";
              state.soBanThang += 1;
            } else if (computer.ma === "bua") {
              state.ketQua = "Hòa nhau !!!";
            } else {
              state.ketQua = "Thua sml !!!";
            }
          }
          break;
        case "bao":
          {
            if (computer.ma === "keo") {
              state.ketQua = "Thua sml !!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "I'm iron man, i love you 3000!!";
              state.soBanThang += 1;
            } else {
              state.ketQua = "Hòa nhau !!!";
            }
          }
          break;
        default:
          state.soBanThang += 1;
          state.ketQua = "I'm iron man, i love you 3000!!";
          break;
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapOanTuXiReducer;
