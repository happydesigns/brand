declare module '#mdc-highlighter' {
  type HastNode = {
    type: 'element' | 'text'
    tagName?: string
    value?: string
    properties?: Record<string, unknown>
    children?: HastNode[]
  }

  type HighlightResult = {
    tree: HastNode[]
    className: string
    inlineStyle: string
    style: string
  }

  const highlighter: (
    code: string,
    language: string,
    theme: Record<string, string>,
    options?: Record<string, unknown>
  ) => Promise<HighlightResult>

  export default highlighter
}
