const TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN_STORAGE_KEY;

const setHeader = async (config: any) => {
  const accessToken = getAccessToken();

  config["Token"] = `${accessToken}`;

  return config;
};

const saveKeyStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

const getKeyStorage = (key: string) => {
      if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const item = localStorage.getItem(key) || "";
    return item;
  }
  return ""; 
};

const removeKeyStorage = (key: string) => {
  return localStorage.removeItem(key);
};

const saveAccessToken = (authToken: string) => {
  saveKeyStorage(TOKEN ?? "", authToken);
};

const getAccessToken = () => {
  return getKeyStorage(TOKEN ?? "") ?? "";
};
const clearLogout = () => {
  // clean all storage data
  removeKeyStorage("user");
  removeKeyStorage(TOKEN ?? "");
};
export default {
setHeader ,
clearLogout ,
  saveKeyStorage,
  removeKeyStorage,
  saveAccessToken,
  getAccessToken,
  getKeyStorage
  
};
