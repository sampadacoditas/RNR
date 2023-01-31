class Http {
  baseURL = "http://localhost:4000/";
  // baseURL="https://jsonplaceholder.typicode.com/"
  jwtToken = "";
  async send(url: string, options = {}) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, options);
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (url === "auth/login") {
        this.jwtToken = data.token;
      }
      return data;
    } catch (e) {
      console.log("Something Went Wrong", e);
    }
  }

  get(url: string) {
    return this.send(url, {
      method: "GET",
      headers: {
        authorization: `${this.jwtToken}`,
      },
    });
  }

  post(url: string, data: any) {
    if (url === "auth/login") {
      return this.send(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      return this.send(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `${this.jwtToken}`,
        },
        body: JSON.stringify(data),
      });
    }
  }

  delete(url: string) {
    return this.send(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authorization": `${this.jwtToken}`,
      },
    });
  }
  put(url: string, data: any) {
    return this.send(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "authorization": `${this.jwtToken}`,
      },
      body: JSON.stringify(data),
    });
  }
}

export const http = new Http();
