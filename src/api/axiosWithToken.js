import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer BPRC8bRNteU6q9ruTWNth2aTfwS_byKJr51VnTD-rg9dw3Ly9oMY5tIooOPGhX1tiPhiEI7rZz3vTtp-ydCLSZg6iVApaQCEYPiLI3xwQQU8wZ3rvCv-AIkCMCGPX3Yx',
  },
});
