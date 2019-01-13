"use strict";

module.exports = {
  HTTP_STATUS_CODE: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHENTICATED: 401,
    UNAUTHORIZED: 403,
    NOT_FOUND: 404,
    UNSUPPORTED_MEDIA_TYPE: 415,
    READ_TIMEOUT: 408,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    CONNECT_TIMEOUT: 504
  },
  CONTENT_TYPES: {
    JSON: "application/json",
    FORM: "application/x-www-form-urlencoded"
  },
  MONGO_DB: process.env.MONGO_DB || "mongodb://localhost:27017/NodeTemplate",
  DEFAULT_TIMEOUT_MINUTES: process.env.DEFAULT_TIMEOUT_MINUTES || 30,
  PORT: process.env.PORT || 3000,
  SIGNALS: {
    AUTH_SUCCESS: "authentication succeeded",
    AUTH_FAILED: "authentication failed",
    NO_AUTH: "User is not authenticated"
  },
  INGEST_URL: process.env.INGEST_URL || "",
  SCHEDULE_URL: process.env.SCHEDULE_URL || ""
};
