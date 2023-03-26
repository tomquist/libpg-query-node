const PgQuery = require('./build/Release/queryparser');
const { pg_query } = require('./proto');

module.exports = {
  parseQuery(query) {
    return new Promise((resolve, reject) => {
      PgQuery.parseQueryAsync(query, (err, result) => {
        err ? reject(err) : resolve(pg_query.ParseResult.decode(result).toJSON());
      });
    });
  },

  deparse(parseTree) {
    const msg = pg_query.ParseResult.fromObject(parseTree);
    const data = pg_query.ParseResult.encode(msg).finish();
    return new Promise((resolve, reject) => {
      PgQuery.deparseAsync(data, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  },

  parsePlPgSQL(query) {
    return new Promise((resolve, reject) => {
      PgQuery.parsePlPgSQLAsync(query, (err, result) => {
        err ? reject(err) : resolve(JSON.parse(result));
      });
    });
  },

  parseQuerySync(query) {
    return pg_query.ParseResult.decode(PgQuery.parseQuerySync(query)).toJSON();
  },

  deparseSync(parseTree) {
    const msg = pg_query.ParseResult.fromObject(parseTree);
    const data = pg_query.ParseResult.encode(msg).finish();
    return PgQuery.deparseSync(data);
  },

  parsePlPgSQLSync(query) {
    return JSON.parse(PgQuery.parsePlPgSQLSync(query));
  },

  fingerprint(query) {
    return new Promise((resolve, reject) =>{
      PgQuery.fingerprintAsync(query, (err, result) => {
        err ? reject(err) : resolve(result);
      })
    });
  },

  fingerprintSync(query) {
    return PgQuery.fingerprintSync(query);
  }
};
