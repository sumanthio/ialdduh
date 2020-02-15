const baseURL = "https://jsonplaceholder.typicode.com/";
const postsUrl = `${baseURL}posts`;
const usersUrl = `${baseURL}users`;

export const getPosts = async () => {
  const data = await fetch(`${postsUrl}`);
  return await data.json();
  //try catch
};
export const getPostContent = async id => {
  const data = await fetch(`${postsUrl}/${id}`);
  return await data.json();
};
export const getAuthorDetails = async id => {
  const data = await fetch(`${usersUrl}/${id}`);
  return await data.json();
};
export const getComments = async id => {
  const data = await fetch(`${postsUrl}/${id}/comments`);
  return await data.json();
};
