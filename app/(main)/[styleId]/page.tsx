'use client';

import { use } from 'react';
import { PreviewContent } from '@/components/pages/PreviewContent';

export default function StylePreviewPage({
  params,
}: {
  params: Promise<{ styleId: string }>;
}) {
  const { styleId } = use(params);
  return <PreviewContent styleId={styleId} />;
}
