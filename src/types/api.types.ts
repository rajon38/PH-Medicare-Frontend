export interface ApiResponse<TData = unknown> {
    success: boolean;
    message: string;
    data: TData;
    meta?: PaginationMeta
}

export interface PaginationMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};

export interface ApiErrorResponse {
    success: boolean;
    message: string;
}