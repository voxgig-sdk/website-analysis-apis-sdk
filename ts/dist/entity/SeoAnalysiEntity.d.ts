import { WebsiteAnalysisApisEntityBase } from '../WebsiteAnalysisApisEntityBase';
import type { WebsiteAnalysisApisSDK } from '../WebsiteAnalysisApisSDK';
import type { Control } from '../types';
import type { SeoAnalysi, SeoAnalysiLoadMatch } from '../WebsiteAnalysisApisTypes';
declare class SeoAnalysiEntity extends WebsiteAnalysisApisEntityBase<SeoAnalysi> {
    constructor(client: WebsiteAnalysisApisSDK, entopts: any);
    make(this: SeoAnalysiEntity): SeoAnalysiEntity;
    load(this: any, reqmatch?: SeoAnalysiLoadMatch, ctrl?: Control): Promise<SeoAnalysiEntity>;
}
export { SeoAnalysiEntity };
