module.exports = {
  timeout: 100,
  load: {
    before: ["responseTime", "logger", "cors", "responses", "gzip"],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order"
    ],
    after: ["parser", "router"]
  },
  settings: {
    cors: {
      enable: true
    },
    methods:{
      value: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD","OPTIONS"]
    },
    public: {
      path: "./public",
      maxAge: 60000
    }
  }
};
