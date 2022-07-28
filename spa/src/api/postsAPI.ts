export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
