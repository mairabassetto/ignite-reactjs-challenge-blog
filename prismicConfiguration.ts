import { Document } from '@prismicio/client/types/documents';

export const repoName = 'BlogSiteSpaceTraveling';

export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT;
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export const linkResolver = (doc: Document) => {
  if (doc.type === 'posts') {
    return `/post/${doc.uid}`;
  }
  return '/';
};

export const Router = {
  routes: [
    {
      type: 'page',
      path: '/:uid',
    },
  ],
};
