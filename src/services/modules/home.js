import hyRequest from '../request'
//城市数据
export function getHomeHotSuggests() {
  return hyRequest.get({ 
    url: "/home/hotSuggests" 
  })
}
//
export function getHomeCategories() {
  return hyRequest.get({
    url: "/home/categories"
  })
}
//热门精选
export function getHomeHouseList(currentPage) {
  return hyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}