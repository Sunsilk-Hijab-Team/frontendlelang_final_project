import http from "../http-common";
class DataService {
  getAll() {
    return http.get("/seller/category/all");
  }
  get(id) {
    return http.get(`/seller/category/getById/${id}`);
  }
  create(data) {
    return http.post("/seller/category/add", data);
  }
  update(id, data) {
    return http.put(`/seller/category/update/${id}`, data);
  }
  delete(id) {
    return http.delete(`/seller/category/delete/${id}`);
  }
}
export default new DataService();