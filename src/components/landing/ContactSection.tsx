'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitContactForm } from '@/lib/contactService';

// Zod schema for form validation
const createContactSchema = (t: any) => z.object({
    name: z.string()
        .min(1, t('landing.contact.validation.nameRequired'))
        .min(2, t('landing.contact.validation.nameMin')),
    email: z.string()
        .min(1, t('landing.contact.validation.emailRequired'))
        .email(t('landing.contact.validation.emailInvalid')),
    subject: z.string()
        .min(1, t('landing.contact.validation.subjectRequired'))
        .min(5, t('landing.contact.validation.subjectMin')),
    message: z.string()
        .min(1, t('landing.contact.validation.messageRequired'))
        .min(10, t('landing.contact.validation.messageMin'))
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export const ContactSection: React.FC = () => {
    const { t } = useTranslation();
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(createContactSchema(t))
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            const result = await submitContactForm(data);

            if (result.success) {
                setSubmitStatus('success');
                reset();
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                // Reset error message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    return (
        <section className="py-24 bg-[#030303] relative overflow-hidden" id="contact">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px]"
                />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                            {t('landing.contact.badge')}
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        {t('landing.contact.title')}
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        {t('landing.contact.subtitle')}
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                                {t('landing.contact.form.name')}
                            </label>
                            <input
                                {...register('name')}
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                placeholder={t('landing.contact.form.namePlaceholder')}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                                {t('landing.contact.form.email')}
                            </label>
                            <input
                                {...register('email')}
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                placeholder={t('landing.contact.form.emailPlaceholder')}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
                            {t('landing.contact.form.subject')}
                        </label>
                        <input
                            {...register('subject')}
                            type="text"
                            id="subject"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                            placeholder={t('landing.contact.form.subjectPlaceholder')}
                        />
                        {errors.subject && (
                            <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                            {t('landing.contact.form.message')}
                        </label>
                        <textarea
                            {...register('message')}
                            id="message"
                            rows={6}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                            placeholder={t('landing.contact.form.messagePlaceholder')}
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col items-center gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting || submitStatus === 'success'}
                            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    {t('landing.contact.form.submitting')}
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    {t('landing.contact.form.submit')}
                                </>
                            ) : (
                                <>
                                    {t('landing.contact.form.submit')}
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm"
                            >
                                <CheckCircle className="w-4 h-4" />
                                {t('landing.contact.form.success')}
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                            >
                                <AlertCircle className="w-4 h-4" />
                                {t('landing.contact.form.error')}
                            </motion.div>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    );
};
