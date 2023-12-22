import axios from "axios";

class UserService {
  async sendUserData(userInfo) {
    try {
      const response = await axios.post("http://localhost:3001/api/sendUserData", userInfo);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw new Error("Registration failed. Please try again later.");
    }
  }
}

export default UserService;