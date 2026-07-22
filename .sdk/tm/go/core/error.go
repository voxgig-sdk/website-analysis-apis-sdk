package core

type WebsiteAnalysisApisError struct {
	IsWebsiteAnalysisApisError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWebsiteAnalysisApisError(code string, msg string, ctx *Context) *WebsiteAnalysisApisError {
	return &WebsiteAnalysisApisError{
		IsWebsiteAnalysisApisError: true,
		Sdk:              "WebsiteAnalysisApis",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WebsiteAnalysisApisError) Error() string {
	return e.Msg
}
