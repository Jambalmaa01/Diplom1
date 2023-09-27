import axios from "axios";
const baseUrl = 'http://10.0.1.157:8081'; 

export const planDay = async () => {
  const signUp = {
    method: 'get',
    url: `${baseUrl}/api/signup`
  };

  const response = await axios(signUp);
  return response;
}
