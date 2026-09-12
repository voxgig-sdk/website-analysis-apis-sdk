import { WebsiteAnalysisApisEntityBase } from '../WebsiteAnalysisApisEntityBase';
import type { WebsiteAnalysisApisSDK } from '../WebsiteAnalysisApisSDK';
import type { Control } from '../types';
import type { Seo, SeoListMatch } from '../WebsiteAnalysisApisTypes';
declare class SeoEntity extends WebsiteAnalysisApisEntityBase<Seo> {
    constructor(client: WebsiteAnalysisApisSDK, entopts: any);
    make(this: SeoEntity): SeoEntity;
    list(this: any, reqmatch?: SeoListMatch, ctrl?: Control): Promise<SeoEntity[]>;
}
export { SeoEntity };
