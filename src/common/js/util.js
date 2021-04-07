/**
 *解析url参数
 *@example ?id=12345&a=b
 *@return Object {id:12345,a:b}
 */
export function urlParse () {
  const url = window.location.search
  console.log(url)
  const obj = {}
  const reg = /[?&][^?&]+=[^?&]+/g
  const arr = url.match(reg)
  // 希望获得的结果是['?id=12345','&a=b']
  if (arr) {
    arr.forEach((item) => {
      const tempArr = item.substring(1).split('=')
      const key = decodeURIComponent(tempArr[0])
      const value = decodeURIComponent(tempArr[1])
      obj[key] = value
    })
  }
  return obj
}
