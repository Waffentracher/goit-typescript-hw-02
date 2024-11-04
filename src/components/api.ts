import axios from "axios";

const API_KEY = "JUxp1MPibBiw2RjxsmCYGolrkqsyIRYarXoAoqFNEKI";
axios.defaults.baseURL = "https://api.unsplash.com/";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface FetchImagesResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (query: string, page: number = 1): Promise<FetchImagesResponse> => {
  try {
    const response = await axios.get<FetchImagesResponse>("/search/photos", {
      params: {
        query,
        page,
        per_page: 12,
      },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
