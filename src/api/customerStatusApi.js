import { API_URL } from "../../package.json";

class customerStatusApi {
  static getCustomerStatus(credentials) {
    const request = new Request(API_URL + `/api/Dashboard/GetUserStatisctic`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt")
      }),
      body: JSON.stringify(credentials)
    });
    return fetch(request)
      .then(response => {
        if (response.status >= 400 && response.status < 600) {
          return response.text().then(text => {
            return Promise.reject(text);
          });
        }
        return response.json();
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}

export default customerStatusApi;
