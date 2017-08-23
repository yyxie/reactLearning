import AppConfig from './make.config.jsx';

const baseUrl = "http://localhost:8888",
  UA = "Apartment";

module.exports = AppConfig({
  baseUrl: baseUrl,
  baseDir: baseUrl,
  UA: UA
});
