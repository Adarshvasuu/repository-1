import type { NextConfig } from 'next'

const repoName = 'repository-1'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isGitHubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
}

export default nextConfig