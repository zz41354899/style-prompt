'use client';

import { use } from 'react';
import { ProPreviewContent } from '@/components/pro';

export default function ProEditorPage({
    params,
}: {
    params: Promise<{ styleId: string }>;
}) {
    const { styleId } = use(params);
    return <ProPreviewContent styleId={styleId} />;
}
