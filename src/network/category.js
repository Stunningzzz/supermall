import { request } from './request'

export function getCateTabs(){ 
  return request({
    url:'/category'
  })
}

export function getCateInfo(maitKey){
  console.log('maitKey ---- ',maitKey);
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getCateDetail( miniWallkey,type ){
  console.log('miniWallkey ---- ',miniWallkey);
  console.log('type ---- ',type);
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}