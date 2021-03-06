import GhostContentAPI from "@tryghost/content-api";


// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'https://scottmichaelbossard.ghost.io',
    key: '708f942aff577f5aa32745c41b',
    version: "v3"
  });

export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
}

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }