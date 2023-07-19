import pp from './object-properties';

export default function ext(env) {
  return {
    definition: pp(env),
    support: {
      snapshot: false,
      export: false,
      sharing: false,
      exportData: false,
      viewData: false,
    },
    importProperties: null,
    exportProperties: null,
  };
}