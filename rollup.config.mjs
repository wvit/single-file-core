/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: ['./single-file.js'],
    output: [
      {
        file: 'lib/single-file.js',
        format: 'umd',
        name: 'singlefile',
        plugins: [],
      },
    ],
  },

  {
    input: ['./single-file-bootstrap.js'],
    output: [
      {
        file: 'lib/single-file-bootstrap.js',
        format: 'umd',
        name: 'singlefileBootstrap',
        plugins: [],
      },
    ],
  },
]
