export interface Performance {
    loadTime?: number;
    pageSize?: number;
    requests?: number;
    timestamp?: string;
    url?: string;
}
export interface PerformanceLoadMatch {
    url: string;
}
export interface Screenshot {
    screenshotUrl?: string;
    timestamp?: string;
    url?: string;
}
export interface ScreenshotLoadMatch {
    url: string;
}
export interface Seo {
    foundOn?: string;
    link?: string;
    statusCode?: number;
}
export interface SeoListMatch {
    url: string;
}
export interface SeoAnalysi {
    headings?: Record<string, any>;
    images?: Record<string, any>;
    metaDescription?: string;
    score?: number;
    timestamp?: string;
    title?: string;
    url?: string;
}
export interface SeoAnalysiLoadMatch {
    url: string;
}
export interface Ssl {
    daysRemaining?: number;
    issuer?: string;
    timestamp?: string;
    url?: string;
    valid?: boolean;
    validFrom?: string;
    validTo?: string;
}
export interface SslLoadMatch {
    url: string;
}
export interface TechStack {
    category?: string;
    name?: string;
    version?: string;
}
export interface TechStackListMatch {
    url: string;
}
