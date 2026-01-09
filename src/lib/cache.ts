/**
 * 簡單的記憶體快取工具
 * 用於減少重複的 API 請求
 */

interface CacheEntry<T> {
    data: T;
    timestamp: number;
    expiresAt: number;
}

class SimpleCache {
    private cache = new Map<string, CacheEntry<unknown>>();
    private readonly defaultTTL = 60 * 1000; // 預設 60 秒

    get<T>(key: string): T | null {
        const entry = this.cache.get(key);
        if (!entry) return null;
        
        if (Date.now() > entry.expiresAt) {
            this.cache.delete(key);
            return null;
        }
        
        return entry.data as T;
    }

    set<T>(key: string, data: T, ttl: number = this.defaultTTL): void {
        const now = Date.now();
        this.cache.set(key, {
            data,
            timestamp: now,
            expiresAt: now + ttl,
        });
    }

    invalidate(key: string): void {
        this.cache.delete(key);
    }

    invalidatePattern(pattern: string): void {
        const regex = new RegExp(pattern);
        for (const key of this.cache.keys()) {
            if (regex.test(key)) {
                this.cache.delete(key);
            }
        }
    }

    clear(): void {
        this.cache.clear();
    }
}

export const apiCache = new SimpleCache();

/**
 * 快取包裝函數
 * 用於包裝 async 函數，自動處理快取邏輯
 */
export async function withCache<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number
): Promise<T> {
    const cached = apiCache.get<T>(key);
    if (cached !== null) {
        return cached;
    }

    const data = await fetcher();
    apiCache.set(key, data, ttl);
    return data;
}
