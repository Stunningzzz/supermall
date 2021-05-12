
export default function data() {
  return {
    banner: {},
    recommend: {},
    keywords: [],
    goods: {
      pop: { list: [], page: 1 },
      new: { list: [], page: 1 },
      sell: { list: [], page: 1 },
    },
    curType: 'pop',
    position: {
      pop:0,
      new:0,
      sell:0,
    },
    offsetTop: 0,
    showPlaceHolder: false,
    scrolling: false,
    itemImgLoad: () => {},
  }
}