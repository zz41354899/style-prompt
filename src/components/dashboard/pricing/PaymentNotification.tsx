'use client';

import React from 'react';
import { XCircle, AlertCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type NotificationType = 'failed' | 'error' | 'unknown';

interface PaymentNotificationProps {
    type: NotificationType;
    errorMessage?: string | null;
    onDismiss: () => void;
}

export const PaymentNotification: React.FC<PaymentNotificationProps> = ({
    type,
    errorMessage,
    onDismiss,
}) => {
    const { t } = useTranslation();

    if (type === 'failed') {
        return (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                <div className="p-2 bg-red-500/20 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-red-400">{t('dashboard.pricing.paymentFailed')}</h3>
                    <p className="text-red-300/80 text-sm mt-1">
                        {errorMessage || t('dashboard.pricing.paymentFailedDesc')}
                    </p>
                </div>
                <button
                    onClick={onDismiss}
                    className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                    <X className="w-4 h-4 text-red-400/60" />
                </button>
            </div>
        );
    }

    if (type === 'error' || type === 'unknown') {
        return (
            <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-yellow-400">{t('dashboard.pricing.paymentUnknown')}</h3>
                    <p className="text-yellow-300/80 text-sm mt-1">
                        {t('dashboard.pricing.paymentUnknownDesc')}
                    </p>
                </div>
                <button
                    onClick={onDismiss}
                    className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                    <X className="w-4 h-4 text-yellow-400/60" />
                </button>
            </div>
        );
    }

    return null;
};
