/* eslint-disable @typescript-eslint/no-explicit-any */
export const API_BASE_URL = "http://127.0.0.1:8080/api/v1";

interface RequestBody {
  [key: string]: string | number | boolean | object;
}

export const postRequest = async <T>(
  url: string,
  params: RequestBody
): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: "POST",
    body: JSON.stringify(params),
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
};

export const getRequest = async <
  T = {
    code: number;
    data: { [key: string]: any };
    message: string;
    total?: number;
  }
>(
  url: string
): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
};
