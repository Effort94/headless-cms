const baseUrl = process.env.WORDPRESS_API_URL;

import {gql, GraphQLClient} from 'graphql-request';
import {Category} from '@/src/lib/types';

const client = new GraphQLClient(`${baseUrl}/graphql`);

export async function getCategories(): Promise<Category[]> {
    const query = gql`
    query getCategories{
            categories {
                nodes {
                    id
                    name
                    slug
                }
            }
        }
    `;

    const data: { categories: { nodes: Category[] } } = await client.request(query);
    return data.categories.nodes;
}

export async function getNavigation(slug: string) {
    const query = gql`
    query GetMenuBySlug($slug: ID!) {
      menu(id: $slug, idType: SLUG) {
        menuItems {
          nodes {
            id
            label
            url
            parentId
            order
          }
        }
      }
    }
  `;

    const data = await client.request(query, {
        slug: slug
    });

    return data.menu.menuItems.nodes;
}

export async function fetchPageBySlug(slug: string) {
    const query = gql`
        query GetPage($slug: String!) {
            pageBy(uri: $slug) {
                title
                content
                uri
            }
        }
    `;

    return await client.request(query, {
        slug
    });
}