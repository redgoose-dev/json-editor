declare module 'json-editor' {

  type typeOptions = {
    live?: boolean
    theme?: 'system' | 'light' | 'dark'
  }
  type typeData = any[] | object
  type typeAddNodeOptions = {
    data: typeData
    between?: 'before' | 'after'
    open?: boolean
    callback?: function
  }
  type typeNames = 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null'
  type typeCustomContextOptions = {
    node?: HTMLElement,
    type?: typeNames,
    isRoot?: boolean,
  }

  class JsonEditor {
    // properties
    options: typeOptions
    context: Context
    // class units
    constructor(wrap: HTMLElement, options?: typeOptions)
    // public methods
    addNode(target: HTMLElement, options: typeAddNodeOptions, useUpdate?: boolean): void
    removeNode(node: HTMLElement, useUpdate?: boolean): void
    changeType(node: HTMLElement, type: typeNames, useUpdate?: boolean): void
    duplicate(target: HTMLElement, useUpdate?: boolean): void
    fold(node: HTMLElement, sw?: boolean): void
    clear(): void
    destroy(): void
    replace(data: typeData, useUpdate?: boolean): void
    import(target: HTMLElement, data: typeData, useUpdate?: boolean): void
    export(node: HTMLElement, json?: boolean, space?: number): any[]|object
    preview(src?: typeData): void
    customContext(body?: HTMLElement, options?: typeCustomContextOptions, $?: unknown): void
    getNode(selector?: string): HTMLElement
  }

  class Context {
    constructor(parent: JsonEditor, node: HTMLElement, isRoot: boolean)
    close(): void
  }

}
