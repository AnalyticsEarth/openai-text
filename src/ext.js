import pp from './object-properties';

export default function ext(env) {
  return {
    definition: pp(env),
    support: {
      snapshot: true,
      export: true,
      sharing: false,
      exportData: true,
      viewData: false,
    },
    importProperties: null,
    exportProperties: null,
  };
}