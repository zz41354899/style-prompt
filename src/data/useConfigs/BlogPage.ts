import type { UseModule } from './types';

export const BlogPage_Config: UseModule = {
  id: 'BlogPage',
  name: 'Blog / Articles',
  type: 'use',
  content: `## Information Architecture — Blog / Articles

### Required Sections
1. **Featured Posts**
   - Hero article
   - Editor's picks
   - Trending content

2. **Article Grid**
   - Thumbnail images
   - Title and excerpt
   - Author and date
   - Category tags

3. **Categories**
   - Topic navigation
   - Tag cloud
   - Archive links

4. **Sidebar**
   - Search bar
   - Popular posts
   - Newsletter signup
   - Social follow

5. **Pagination**
   - Load more button
   - Page numbers
   - Infinite scroll option

### Content Strategy
- SEO optimization
- Scannable content
- Visual hierarchy
- Engagement hooks

### User Flow
- Content discovery
- Easy navigation
- Social sharing
- Newsletter conversion`,
  architecture: `## Deliverables

### Sections Map (Blog / Articles)
1. Featured article hero
2. Category navigation
3. Article grid/list
4. Sidebar (search, popular, newsletter)
5. Pagination
6. Footer

### Article Card Components
- Thumbnail image
- Title and excerpt
- Author avatar and name
- Date and read time
- Category tags`
};
