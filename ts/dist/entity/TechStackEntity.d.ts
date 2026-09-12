import { WebsiteAnalysisApisEntityBase } from '../WebsiteAnalysisApisEntityBase';
import type { WebsiteAnalysisApisSDK } from '../WebsiteAnalysisApisSDK';
import type { Control } from '../types';
import type { TechStack, TechStackListMatch } from '../WebsiteAnalysisApisTypes';
declare class TechStackEntity extends WebsiteAnalysisApisEntityBase<TechStack> {
    constructor(client: WebsiteAnalysisApisSDK, entopts: any);
    make(this: TechStackEntity): TechStackEntity;
    list(this: any, reqmatch?: TechStackListMatch, ctrl?: Control): Promise<TechStackEntity[]>;
}
export { TechStackEntity };
