export const defaultOptions = {
  live: false, // live update
  theme: 'system',
}

export const defaultAddNodeOptions = {
  target: undefined,
  data: undefined,
  between: 'after',
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

export const DRAG_HOVER_NODE_CLASS = {
  START: 'drag-over-start',
  END: 'drag-over-end',
  ALL: 'drag-over-start drag-over-end',
}