import { ProLandingPage } from '@/components/ProLandingPage';
import { AuthProvider } from '@/components/providers/AuthProvider';

export default function ProPage() {
    return (
        <AuthProvider>
            <ProLandingPage />
        </AuthProvider>
    );
}
