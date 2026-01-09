'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

interface PaginationItemProps {
    children: React.ReactNode;
    isActive?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
    children,
    isActive = false,
    disabled = false,
    onClick,
    className = ''
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
                h-9 min-w-9 px-3
                transition-colors
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500
                disabled:pointer-events-none disabled:opacity-50
                ${isActive
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
                }
                ${className}
            `}
        >
            {children}
        </button>
    );
};

const PaginationEllipsis: React.FC = () => {
    return (
        <span className="flex h-9 w-9 items-center justify-center">
            <MoreHorizontal className="h-4 w-4 text-white/40" />
            <span className="sr-only">更多頁面</span>
        </span>
    );
};

function generatePaginationRange(
    currentPage: number,
    totalPages: number,
    siblingCount: number
): (number | 'ellipsis')[] {
    const totalPageNumbers = siblingCount * 2 + 5; // siblings + first + last + current + 2 ellipsis slots

    // Case 1: Total pages less than total numbers we want to show
    if (totalPages <= totalPageNumbers) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSiblingIndex > 2;
    const showRightEllipsis = rightSiblingIndex < totalPages - 1;

    // Case 2: No left ellipsis, but right ellipsis
    if (!showLeftEllipsis && showRightEllipsis) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
        return [...leftRange, 'ellipsis', totalPages];
    }

    // Case 3: Left ellipsis, but no right ellipsis
    if (showLeftEllipsis && !showRightEllipsis) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = Array.from(
            { length: rightItemCount },
            (_, i) => totalPages - rightItemCount + i + 1
        );
        return [1, 'ellipsis', ...rightRange];
    }

    // Case 4: Both ellipsis
    const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
    );
    return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages];
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1
}) => {
    if (totalPages <= 1) return null;

    const paginationRange = generatePaginationRange(currentPage, totalPages, siblingCount);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <nav
            role="navigation"
            aria-label="分頁導航"
            className="mx-auto flex w-full justify-center"
        >
            <ul className="flex flex-row items-center gap-1">
                {/* Previous Button */}
                <li>
                    <PaginationItem
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="gap-1 pl-2.5"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="hidden sm:inline">上一頁</span>
                    </PaginationItem>
                </li>

                {/* Page Numbers */}
                {paginationRange.map((page, index) => (
                    <li key={`${page}-${index}`}>
                        {page === 'ellipsis' ? (
                            <PaginationEllipsis />
                        ) : (
                            <PaginationItem
                                isActive={currentPage === page}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </PaginationItem>
                        )}
                    </li>
                ))}

                {/* Next Button */}
                <li>
                    <PaginationItem
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="gap-1 pr-2.5"
                    >
                        <span className="hidden sm:inline">下一頁</span>
                        <ChevronRight className="h-4 w-4" />
                    </PaginationItem>
                </li>
            </ul>
        </nav>
    );
};

// 輔助 hook：分頁邏輯
export function usePagination<T>(items: T[], itemsPerPage: number = 10) {
    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Reset to page 1 when items change significantly
    React.useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(1);
        }
    }, [items.length, totalPages, currentPage]);

    const paginatedItems = React.useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    }, [items, currentPage, itemsPerPage]);

    return {
        currentPage,
        totalPages,
        paginatedItems,
        setCurrentPage,
        itemsPerPage,
        totalItems: items.length,
        startIndex: (currentPage - 1) * itemsPerPage + 1,
        endIndex: Math.min(currentPage * itemsPerPage, items.length)
    };
}

export default Pagination;
