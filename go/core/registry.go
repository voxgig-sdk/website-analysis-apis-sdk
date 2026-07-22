package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPerformanceEntityFunc func(client *WebsiteAnalysisApisSDK, entopts map[string]any) WebsiteAnalysisApisEntity

var NewScreenshotEntityFunc func(client *WebsiteAnalysisApisSDK, entopts map[string]any) WebsiteAnalysisApisEntity

var NewSeoEntityFunc func(client *WebsiteAnalysisApisSDK, entopts map[string]any) WebsiteAnalysisApisEntity

var NewSeoAnalysiEntityFunc func(client *WebsiteAnalysisApisSDK, entopts map[string]any) WebsiteAnalysisApisEntity

var NewSslEntityFunc func(client *WebsiteAnalysisApisSDK, entopts map[string]any) WebsiteAnalysisApisEntity

var NewTechStackEntityFunc func(client *WebsiteAnalysisApisSDK, entopts map[string]any) WebsiteAnalysisApisEntity

