// Send the production pages.dev address and www to the custom domain, keeping the path,
// so old links still land on the right page and search engines see one address.
// Preview deployments (<hash>.jengrau.pages.dev) are left alone.
const redirectHosts = new Set(['jengrau.pages.dev', 'www.jengrau.me']);

export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);
  if (redirectHosts.has(url.hostname)) {
    url.hostname = 'jengrau.me';
    return Response.redirect(url.toString(), 301);
  }
  return next();
};
