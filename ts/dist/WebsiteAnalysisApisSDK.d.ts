import { PerformanceEntity } from './entity/PerformanceEntity';
import { ScreenshotEntity } from './entity/ScreenshotEntity';
import { SeoEntity } from './entity/SeoEntity';
import { SeoAnalysiEntity } from './entity/SeoAnalysiEntity';
import { SslEntity } from './entity/SslEntity';
import { TechStackEntity } from './entity/TechStackEntity';
export type * from './WebsiteAnalysisApisTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { WebsiteAnalysisApisEntityBase } from './WebsiteAnalysisApisEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class WebsiteAnalysisApisSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Performance(entopts?: Record<string, any>): PerformanceEntity;
    Screenshot(entopts?: Record<string, any>): ScreenshotEntity;
    Seo(entopts?: Record<string, any>): SeoEntity;
    SeoAnalysi(entopts?: Record<string, any>): SeoAnalysiEntity;
    Ssl(entopts?: Record<string, any>): SslEntity;
    TechStack(entopts?: Record<string, any>): TechStackEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): WebsiteAnalysisApisSDK;
    tester(testopts?: any, sdkopts?: any): WebsiteAnalysisApisSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof WebsiteAnalysisApisSDK;
export { stdutil, config, BaseFeature, WebsiteAnalysisApisEntityBase, WebsiteAnalysisApisSDK, SDK, };
