import { useQuery } from "react-query";
import { getMediumPosts } from "./get-medium-posts";

export const useGetMediumPosts = () => {
  const { data, isLoading } = useQuery("mediumPosts", () => getMediumPosts());
  return { data, isLoading };
};
