#include "pg_query.h"
#include <napi.h>

Napi::Error CreateError(Napi::Env env, const PgQueryError& err);
Napi::Buffer<char> QueryParseResult(Napi::Env env, const PgQueryProtobufParseResult& result);
Napi::String DeparseResult(Napi::Env env, const PgQueryDeparseResult& result);
Napi::String PlPgSQLParseResult(Napi::Env env, const PgQueryPlpgsqlParseResult& result);
Napi::String FingerprintResult(Napi::Env env, const PgQueryFingerprintResult & result);
