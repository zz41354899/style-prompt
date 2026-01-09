import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchUsers,
    fetchPurchaseStats,
    fetchAnnouncementStats,
    fetchChangelogStats,
    fetchContactStats,
    fetchAllAnnouncements,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    toggleAnnouncementActive,
    type AdminUser,
    type Announcement,
    type CreateAnnouncementInput
} from '@/lib/admin/adminService';
import { deleteImage } from '@/lib/storageService';

// ============================================
// Query Keys
// ============================================
export const adminQueryKeys = {
    all: ['admin'] as const,
    users: () => [...adminQueryKeys.all, 'users'] as const,
    dashboardStats: () => [...adminQueryKeys.all, 'dashboard-stats'] as const,
    announcements: () => [...adminQueryKeys.all, 'announcements'] as const,
    changelogs: () => [...adminQueryKeys.all, 'changelogs'] as const,
    contacts: () => [...adminQueryKeys.all, 'contacts'] as const,
    purchases: () => [...adminQueryKeys.all, 'purchases'] as const,
};

// ============================================
// Dashboard 統計 Hook（合併請求）
// ============================================
interface DashboardStats {
    users: AdminUser[];
    purchaseStats: { total: number; thisMonth: number; monthlyRevenue: number };
    announcementStats: { active: number; draft: number; total: number };
    changelogStats: { total: number; latestVersion: string };
    contactStats: { pending: number; total: number };
}

export function useAdminDashboard() {
    return useQuery({
        queryKey: adminQueryKeys.dashboardStats(),
        queryFn: async (): Promise<DashboardStats> => {
            const [
                usersResult,
                purchaseStats,
                announcementStats,
                changelogStats,
                contactStats
            ] = await Promise.all([
                fetchUsers(),
                fetchPurchaseStats(),
                fetchAnnouncementStats(),
                fetchChangelogStats(),
                fetchContactStats()
            ]);

            return {
                users: usersResult.data || [],
                purchaseStats,
                announcementStats,
                changelogStats,
                contactStats
            };
        },
        staleTime: 30 * 1000, // 30 秒內不重新請求
    });
}

// ============================================
// 公告管理 Hooks
// ============================================
export function useAnnouncements() {
    return useQuery({
        queryKey: adminQueryKeys.announcements(),
        queryFn: async () => {
            const { data, error } = await fetchAllAnnouncements();
            if (error) throw error;
            return data || [];
        },
        staleTime: 0, // 立即標記為過期，確保 Realtime 觸發後重新取得最新資料
        refetchOnWindowFocus: true,
    });
}

export function useCreateAnnouncement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (input: CreateAnnouncementInput) => createAnnouncement(input),
        onMutate: async (newAnnouncement) => {
            // 取消任何進行中的 refetch
            await queryClient.cancelQueries({ queryKey: adminQueryKeys.announcements() });
            
            // 儲存前一個狀態
            const previousAnnouncements = queryClient.getQueryData(adminQueryKeys.announcements());
            
            // Optimistic update：立即加入新公告
            queryClient.setQueryData(adminQueryKeys.announcements(), (old: Announcement[] = []) => [
                {
                    ...newAnnouncement,
                    id: `temp-${Date.now()}`,
                    created_at: new Date().toISOString(),
                },
                ...old,
            ]);
            
            return { previousAnnouncements };
        },
        onError: (_err, _newAnnouncement, context) => {
            // 發生錯誤時回滾
            if (context?.previousAnnouncements) {
                queryClient.setQueryData(adminQueryKeys.announcements(), context.previousAnnouncements);
            }
        },
        onSettled: () => {
            // 無論成功或失敗都重新取得最新資料
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.announcements() });
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
        },
    });
}

export function useUpdateAnnouncement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updates }: { id: string; updates: Partial<CreateAnnouncementInput> }) =>
            updateAnnouncement(id, updates),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.announcements() });
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
        },
    });
}

export function useDeleteAnnouncement() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (announcement: Announcement) => {
            // 如果有圖片，先刪除 Storage 中的圖片
            if (announcement.image_url && announcement.image_url.includes('supabase')) {
                await deleteImage(announcement.image_url, 'notifications');
            }
            return deleteAnnouncement(announcement.id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.announcements() });
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
        },
    });
}

export function useToggleAnnouncementActive() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
            toggleAnnouncementActive(id, !isActive),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.announcements() });
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
        },
    });
}

// ============================================
// 使用者管理 Hook
// ============================================
export function useAdminUsers() {
    return useQuery({
        queryKey: adminQueryKeys.users(),
        queryFn: async () => {
            const { data, error } = await fetchUsers();
            if (error) throw error;
            return data || [];
        },
    });
}

// ============================================
// Changelog 管理 Hooks
// ============================================
import {
    fetchAllChangelogs,
    createChangelog as createChangelogApi,
    updateChangelog as updateChangelogApi,
    deleteChangelog as deleteChangelogApi,
    type Changelog
} from '@/lib/changelogService';

export function useChangelogs() {
    return useQuery({
        queryKey: adminQueryKeys.changelogs(),
        queryFn: async () => {
            const { data, error } = await fetchAllChangelogs();
            if (error) throw error;
            return data || [];
        },
        staleTime: 0, // 立即標記為過期，確保 Realtime 觸發後重新取得最新資料
        refetchOnWindowFocus: true,
    });
}

export function useCreateChangelog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (input: Omit<Changelog, 'id' | 'created_at'>) => createChangelogApi(input),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.changelogs() });
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
        },
    });
}

export function useUpdateChangelog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updates }: { id: string; updates: Partial<Changelog> }) =>
            updateChangelogApi(id, updates),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.changelogs() });
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
        },
    });
}

export function useDeleteChangelog() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (changelog: Changelog) => {
            // 如果有圖片，先刪除 Storage 中的圖片
            if (changelog.image_url && changelog.image_url.includes('supabase')) {
                await deleteImage(changelog.image_url, 'notifications');
            }
            return deleteChangelogApi(changelog.id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.changelogs() });
            queryClient.invalidateQueries({ queryKey: adminQueryKeys.dashboardStats() });
        },
    });
}
