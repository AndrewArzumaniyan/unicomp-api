import { client } from "./googleoauth.js";

const {tokens} = await client.getToken({
  code :'4/0AeaYSHD_HB2Dbys7W109Rq2XVyNeDA5r0m63m8MD4TM1J7pEeoj2N5azMQ2yG5wHC33dEQ',
  redirect_uri: 'http://localhost:5000'
});

console.log(tokens.refresh_token);