import * as axios from 'axios';

const instance = axios.create();

instance.defaults.baseURL = 'http://www.mocky.io/v2/5d889c8a3300002c0ed7da42';
instance.defaults.timeout = 20000;

export { instance as default };
