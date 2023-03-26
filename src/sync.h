#include <napi.h>

Napi::Buffer<char> ParseQuerySync(const Napi::CallbackInfo& info);
Napi::String DeparseSync(const Napi::CallbackInfo& info);
Napi::String ParsePlPgSQLSync(const Napi::CallbackInfo& info);
Napi::String FingerprintSync(const Napi::CallbackInfo& info);
