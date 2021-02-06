
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
      pop: {},
      new: {},
      sell: {}
    },
    offsetTop: 0,
    showPlaceHolder: false,
    scrolling: false,
    itemImgLoad: () => {},
    tempPosition: {
      pop: {},
      new: {},
      sell: {}
    }
  }
}