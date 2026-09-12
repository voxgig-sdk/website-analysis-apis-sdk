import { WebsiteAnalysisApisEntityBase } from '../WebsiteAnalysisApisEntityBase';
import type { WebsiteAnalysisApisSDK } from '../WebsiteAnalysisApisSDK';
import type { Control } from '../types';
import type { Screenshot, ScreenshotLoadMatch } from '../WebsiteAnalysisApisTypes';
declare class ScreenshotEntity extends WebsiteAnalysisApisEntityBase<Screenshot> {
    constructor(client: WebsiteAnalysisApisSDK, entopts: any);
    make(this: ScreenshotEntity): ScreenshotEntity;
    load(this: any, reqmatch?: ScreenshotLoadMatch, ctrl?: Control): Promise<ScreenshotEntity>;
}
export { ScreenshotEntity };
