'use client';

import { useState, useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
    id: string;
    type: ToastType;
    message: string;
}

export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback((type: ToastType, message: string, duration = 3000) => {
        const id = Math.random().toString(36).substr(2, 9);
        const toast: Toast = { id, type, message };

        setToasts((prev) => [...prev, toast]);

        if (duration > 0) {
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, duration);
        }

        return id;
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const success = useCallback((message: string, duration?: number) => {
        return showToast('success', message, duration);
    }, [showToast]);

    const error = useCallback((message: string, duration?: number) => {
        return showToast('error', message, duration);
    }, [showToast]);

    const info = useCallback((message: string, duration?: number) => {
        return showToast('info', message, duration);
    }, [showToast]);

    const warning = useCallback((message: string, duration?: number) => {
        return showToast('warning', message, duration);
    }, [showToast]);

    return {
        toasts,
        showToast,
        removeToast,
        success,
        error,
        info,
        warning,
    };
}
