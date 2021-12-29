import { allBlogs } from '.contentlayer/data';
import { Blog } from '.contentlayer/types';

export function getCategories(): Blog['categories'][] {
  const values = allBlogs.map((blog) => blog.categories).flat();
  return Array.from(new Set(values));
}

export function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function toSentenceCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
