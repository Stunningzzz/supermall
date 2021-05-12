import { request } from './request'

export function getCateTabs(){ 
  return request({
    url:'/category'
  })
}

export function getCateInfo(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getCateDetail( miniWallkey,type ){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}