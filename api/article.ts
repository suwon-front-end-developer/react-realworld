import axios from "axios";
import { SERVER_BASE_URL } from "@/constant";

export default {
  async all() {
    const { data } = await axios(`${SERVER_BASE_URL}/articles`);
    return data;
  },
};
