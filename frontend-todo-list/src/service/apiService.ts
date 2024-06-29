import axiosInstance from "./httpService.ts";
//add the promise return type to all requests
export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const post = async (url: string, body: any): Promise<any> => {
  try {
    const response = await axiosInstance.post(url, body);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const update = async (url: string, body: any): Promise<any> => {
  try {
    const response = await axiosInstance.put(url, body);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const patch = async (url: string, body: any): Promise<any> => {
  try {
    const response = await axiosInstance.patch(url, body);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const del = async (url: string): Promise<any> => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching data:", error);
    throw error;
  }
};
