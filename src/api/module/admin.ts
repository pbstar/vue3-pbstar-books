import http from "@/api/http";

export function toLogin(e: any) {
  return http.get("/user", e)
}