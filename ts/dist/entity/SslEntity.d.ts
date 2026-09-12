import { WebsiteAnalysisApisEntityBase } from '../WebsiteAnalysisApisEntityBase';
import type { WebsiteAnalysisApisSDK } from '../WebsiteAnalysisApisSDK';
import type { Control } from '../types';
import type { Ssl, SslLoadMatch } from '../WebsiteAnalysisApisTypes';
declare class SslEntity extends WebsiteAnalysisApisEntityBase<Ssl> {
    constructor(client: WebsiteAnalysisApisSDK, entopts: any);
    make(this: SslEntity): SslEntity;
    load(this: any, reqmatch?: SslLoadMatch, ctrl?: Control): Promise<SslEntity>;
}
export { SslEntity };
