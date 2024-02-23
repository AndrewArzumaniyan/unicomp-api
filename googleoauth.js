import { OAuth2Client } from 'google-auth-library'

const client = new OAuth2Client(
  '315754937691-trc57003l5v07o6g9e3galjq1pcj99jn.apps.googleusercontent.com',
  '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'
)

const authUrl = client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://mail.google.com/']
})

console.log('It is: ', authUrl)


const {tokens} = await client.getToken({
  code :'4/0AeaYSHD_HB2Dbys7W109Rq2XVyNeDA5r0m63m8MD4TM1J7pEeoj2N5azMQ2yG5wHC33dEQ',
  redirect_uri: 'http://localhost:5000'
});

console.log(tokens.refresh_token);