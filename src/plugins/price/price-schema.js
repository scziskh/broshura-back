export const priceSchema = {
  type: 'object',
  properties: {
    bind_adj: {
      type: 'object',
      additionalProperties: { type: 'integer' },
    },
    bind_sizes: {
      type: 'object',
      additionalProperties: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            cost: { type: 'integer' },
            thick: { type: 'integer' },
          },
          required: ['cost', 'thick'],
        },
      },
    },
    bind_coefs: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        additionalProperties: {
          type: 'object',
          properties: {
            portrait: { type: 'integer' },
            landscape: { type: 'integer' },
          },
        },
      },
    },
    print_coefs: {
      type: 'object',
      additionalProperties: { type: 'integer' },
    },
    count_coefs: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          factor: { type: 'integer' },
          degree: { type: 'integer' },
          max_count: { type: 'integer' },
        },
        required: ['factor', 'degree', 'max_count'],
      },
    },
    papers: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          cost: { type: 'integer' },
          thick: { type: 'integer' },
        },
        required: ['cost', 'thick'],
      },
    },
    prints: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          cost: { type: 'integer' },
          sides: { type: 'integer' },
        },
        required: ['cost', 'sides'],
      },
    },
    lamins: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          cost: { type: 'integer' },
          thick: { type: 'integer' },
          adj: { type: 'integer' },
        },
        required: ['cost', 'thick', 'adj'],
      },
    },
    trim: {
      type: 'object',
      properties: {
        cost: { type: 'integer' },
        min_cost: { type: 'integer' },
      },
      required: ['cost', 'min_cost'],
    },

    separators: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        properties: {
          cost: { type: 'integer' },
          thick: { type: 'integer' },
          print_cost: { type: 'integer' },
        },
        required: ['cost', 'thick', 'print_cost'],
      },
    },
  },
  additionalProperties: false,
};
