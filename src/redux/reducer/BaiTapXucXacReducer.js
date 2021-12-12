const stateDefault = {
  taiXiu: true, // true là tài (từ 3-11), false là xỉu (12 <)
  mangXucXac: [
    { ma: 6, hinhAnh: "./img/gameXucXac/6.png" },
    { ma: 6, hinhAnh: "./img/gameXucXac/6.png" },
    { ma: 6, hinhAnh: "./img/gameXucXac/6.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.taiXiu = action.taiXiu;
      return { ...state };
    }
    case "PLAY_GAME": {
      // buoc 1 xu ly random xuc xac
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // moi lan lap random ra so ngau nhien tu 1-6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // tao ra 1 doi tuong xuc xac tu so ngau nhien
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
        };
        // push vap mang xuc xac
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      // gan sate mangXucXac = mangXucXacNgauNhien
      state.mangXucXac = mangXucXacNgauNhien;
      // xu ly man choi
      state.tongSoBanChoi += 1;
      // xu ly so ban thang

      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);
      // xet dieu kien de nguoi dung thang game
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BaiTapGameXucXacReducer;
