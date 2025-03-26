type BlogPostV2Type = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
};

type BlogPostV2APIResponseType = BlogPostV2Type[];

export type { BlogPostV2Type, BlogPostV2APIResponseType };
