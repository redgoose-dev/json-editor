export const defaultOptions = {
  live: false, // live update
  theme: 'system', // system,light,dark
  edit: 'all', // all,value,none
  openDepth: 0, // open a node with a depth
  node: undefined, // initial node
}

export const defaultAddNodeOptions = {
  open: true,
  callback: undefined,
}

export const TYPES = {
  OBJECT: 'object',
  ARRAY: 'array',
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  NULL: 'null',
}

export const DRAG_EVENT = {
  START: 'pointerdown',
  MOVE: 'pointermove',
  END: 'pointerup.json-editor pointercancel.json-editor',
}

export const CONTEXT_EVENT = {
  CLICK: 'click.json-editor-context',
  KEYUP: 'keyup.json-editor-context',
}

export const DRAG_HOVER_NODE_CLASS = {
  START: 'drag-over-start',
  END: 'drag-over-end',
  ALL: 'drag-over-start drag-over-end',
}
