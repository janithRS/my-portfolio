import axios from "axios";

const BASE_URL = "https://api.rss2json.com/v1/api.json?rss_url=";

const mediumInstance = axios.create({ baseURL: BASE_URL });

export interface MediumPost {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: {
    link: string;
  };
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

export interface GetMediumPostsResponse {
  items: MediumPost[];
}

export const getMediumPosts = async () => {
  const { data } = await mediumInstance.get<GetMediumPostsResponse>(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@janithrs`
  );
  return data;
};
