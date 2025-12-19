'use client';

import { use } from 'react';
import { BuilderContent } from '@/components/pages/BuilderContent';

export default function BuilderWithStylePage({
  params,
}: {
  params: Promise<{ styleId: string }>;
}) {
  const { styleId } = use(params);
  return <BuilderContent initialStyleId={styleId} />;
}
