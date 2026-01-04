import { supabase } from './supabaseClient';

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ContactSubmissionResponse {
    success: boolean;
    error?: string;
}

/**
 * 送出聯絡表單到 Supabase contact_submissions 資料表
 */
export async function submitContactForm(
    data: ContactFormData
): Promise<ContactSubmissionResponse> {
    try {
        const { error } = await supabase
            .from('contact_submissions')
            .insert([
                {
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    status: 'pending'
                }
            ]);

        if (error) {
            console.error('Error submitting contact form:', error);
            return {
                success: false,
                error: error.message
            };
        }

        return { success: true };
    } catch (error) {
        console.error('Unexpected error submitting contact form:', error);
        return {
            success: false,
            error: 'An unexpected error occurred'
        };
    }
}
