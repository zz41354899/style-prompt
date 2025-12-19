'use client';

import { use } from 'react';
import { StylePageContent } from '@/components/pages/StylePageContent';

export default function StylePage({
  params,
}: {
  params: Promise<{ styleId: string }>;
}) {
  const { styleId } = use(params);
  return <StylePageContent styleId={styleId} />;
}
