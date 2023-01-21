import axios from "axios";
import FormData from "form-data";

const API_URL = "https://cabinet.cherkasyoblenergo.com/ajax/searadrrez.php";

export class LocationService {
  static async getDataByLocation(street, house, flat = "#") {
    const requestFormData = new FormData();
    requestFormData.append("street", street.toString());
    requestFormData.append("house", house.toString());
    requestFormData.append("flat", flat.toString());
    requestFormData.append("type_ab", "0");

    const response = await axios.post(API_URL, requestFormData);

    return response.data;
  }
}
