import type { UseModule } from './types';

export const ProductPage_Config: UseModule = {
  id: 'ProductPage',
  name: 'Product Page',
  type: 'use',
  content: `## Information Architecture — Product Page

### Required Sections
1. **Product Hero**
   - Product images/gallery
   - Product title
   - Price and variants
   - Add to cart CTA

2. **Product Details**
   - Description
   - Specifications
   - Size/color options
   - Availability

3. **Reviews**
   - Star ratings
   - Customer reviews
   - Review photos
   - Helpful votes

4. **Related Products**
   - Similar items
   - Frequently bought together
   - Recently viewed

5. **Trust Elements**
   - Shipping info
   - Return policy
   - Secure payment
   - Guarantees

### Content Strategy
- Visual-first approach
- Benefit-focused copy
- Social proof
- Urgency elements

### User Flow
- Quick add to cart
- Easy variant selection
- Review exploration
- Cross-sell discovery`,
  architecture: `## Deliverables

### Sections Map (Product Page)
1. Product image gallery
2. Product info (title, price, variants)
3. Add to cart section
4. Product description tabs
5. Customer reviews
6. Related products
7. Trust badges
8. Footer

### Product Components
- Image carousel/zoom
- Variant selectors
- Quantity picker
- Add to cart button
- Wishlist button`
};
