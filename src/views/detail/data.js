export default function data() {
  return {
    topImages: null,
    itemInfo: null,
    shopInfo: null,
    itemDetail: null,
    itemParams: null,
    comments: null,
    recommends: null,
    itemImgLoad: () => {},
    position: {
      goods: {},
      params: {},
      comments: {},
      recommends: {},
    },
    curIndex: 0,
    cur: { x: 0, y: 0 },
  }
}