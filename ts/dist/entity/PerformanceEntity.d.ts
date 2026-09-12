import { WebsiteAnalysisApisEntityBase } from '../WebsiteAnalysisApisEntityBase';
import type { WebsiteAnalysisApisSDK } from '../WebsiteAnalysisApisSDK';
import type { Control } from '../types';
import type { Performance, PerformanceLoadMatch } from '../WebsiteAnalysisApisTypes';
declare class PerformanceEntity extends WebsiteAnalysisApisEntityBase<Performance> {
    constructor(client: WebsiteAnalysisApisSDK, entopts: any);
    make(this: PerformanceEntity): PerformanceEntity;
    load(this: any, reqmatch?: PerformanceLoadMatch, ctrl?: Control): Promise<PerformanceEntity>;
}
export { PerformanceEntity };
