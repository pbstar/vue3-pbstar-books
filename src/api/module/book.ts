import http from "@/api/http";

export function getBanner() {
  return http.get("/banner", {})
}
export function getHot() {
  return http.get("/list", {
    isHot: 1
  })
}
export function getList(e: any) {
  return http.get("/list", e)
}