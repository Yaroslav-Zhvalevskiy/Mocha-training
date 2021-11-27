module.exports = {
    reporter: 'spec',
    retries: 1,
    spec: ['src/tests/**/*.js'], // the positional arguments!
    timeout: '200000', // same as "timeout: '2s'"
    ui: 'bdd'
};