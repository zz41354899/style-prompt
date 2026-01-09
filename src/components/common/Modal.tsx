'use client';

import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
};

export default function Modal({ 
    isOpen, 
    onClose, 
    title, 
    children, 
    footer,
    maxWidth = 'md' 
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className={`w-full ${maxWidthClasses[maxWidth]} bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden`}>
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                    <h2 className="text-lg font-bold text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 text-white/40 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                    {children}
                </div>

                {/* Modal Footer */}
                {footer && (
                    <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}
