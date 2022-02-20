import {DEV_URL, PROD_URL} from '@env';

const devEnvVariables = {
  SERVER_URL: DEV_URL,
};

const prodEnvVariables = {
  SERVER_URL: PROD_URL,
};

export default __DEV__ ? devEnvVariables : prodEnvVariables;
