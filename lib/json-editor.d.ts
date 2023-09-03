declare module '@redgoose/json-editor' {

  type typeOptions = {
    live?: boolean
    theme?: 'system' | 'light' | 'dark'
    edit?: 'all' | 'value' | 'none'
  }
  type typeData = any[] | object
  type typeAddNodeOptions = {
    open?: boolean
    callback?: Function
  }
  type typeNames = 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null'

  class JsonEditor {
    // properties
    options: typeOptions
    context: Context
    // class units
    constructor(wrap: HTMLElement, options?: typeOptions)
    // public methods
    addNode(target: HTMLElement, data: typeData, options?: typeAddNodeOptions, useUpdate?: boolean, useUpdateCount?: boolean): void
    removeNode(node: HTMLElement, useUpdate?: boolean): void
    changeType(node: HTMLElement, type: typeNames, useUpdate?: boolean): void
    changeKey(node: HTMLElement, keyword: string): void
    changeValue(node: HTMLElement, value: string|number|boolean|null): void
    duplicate(target: HTMLElement, useUpdate?: boolean): void
    fold(node: HTMLElement, sw?: boolean): void
    clear(): void
    destroy(): void
    replace(data: typeData, useUpdate?: boolean): void
    import(target: HTMLElement, data: typeData, useUpdate?: boolean): void
    export(node: HTMLElement, json?: boolean, space?: number): any[]|object
  }

  class Context {
    constructor(parent: JsonEditor, node: HTMLElement, isRoot: boolean)
    close(): void
  }

}
