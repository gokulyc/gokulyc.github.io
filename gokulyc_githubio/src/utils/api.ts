import { BLOG_API_ROOT } from "../consts";

const fetchBlogData = async () => {
  const response = await fetch(`${BLOG_API_ROOT}/blog-contents`);
  if (response.ok) {
    const data = await response.json();
    if (data) {
      return data;
    }
  } else {
    console.log("response", await response.text());
    throw new Error("ApiError.");
  }
};

const fetchBlogPostData = async (id: string) => {
  const response = await fetch(`${BLOG_API_ROOT}/blog/post/${id}`);
  if (response.ok) {
    const data = await response.json();
    if (data) {
      return data;
    }
  } else {
    console.log("response", await response.text());
    throw new Error("ApiError.");
  }
};

export { fetchBlogData, fetchBlogPostData };
