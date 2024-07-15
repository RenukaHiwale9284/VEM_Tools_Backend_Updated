export const environment = {
  production: true,
  // // url1:"http://localhost:8080",
  // // url:"http://localhost:8080",

  // // url1:"http://192.168.0.185:3000",
  // // url: 'http://192.168.0.185:8080',

  // // url:"http://vendorvm2.centralindia.cloudapp.azure.com/api",
  // // url1:"http://vendorvm2.centralindia.cloudapp.azure.com/api"

  // // url1:"https://uat.vendorandproductevaluationtool.pwc.in/api",
  // // url:"https://uat.vendorandproductevaluationtool.pwc.in/api",

  // url1: 'https://dev.vendorandproductevaluationtool.pwc.in/api',
  // url: 'https://dev.vendorandproductevaluationtool.pwc.in/api',

  // login_url: 'https://login-stg.pwc.com/openam/oauth2/authorize',
  // reponse_type: 'code',
  // client_id: 'urn:ipzjlvwvaswv001.pwcglb.com',
  // // redirect_url:'http://localhost:4200',
  // redirect_url: 'https://dev.vendorandproductevaluationtool.pwc.in',
  // scope: 'openid',
  // grant_type: 'authorization_code',
  // secret: 'MEq6SgAGzRknnq5QLKWZ',
  // access_token: 'https://login-stg.pwc.com/openam/oauth2/access_token',
  // user_info: 'https://login-stg.pwc.com/openam/oauth2/userinfo',

  // //power bi variables
  //  workSpaceId : '30df4e17-e989-489c-a953-ee86159a138b',
  // //  reportId : '497879ba-fac7-4729-baf1-3fec41d58065',
  //  reportId : '86dca1ec-f9e9-4b9d-981b-d91e40cefe38',
  // // reportId : 'ff58979a-398b-4e7c-9a66-8d44d00cd1bd',
  //  tenant_id : '513294a0-3e20-41b2-a970-6d30bf1546fa',
  //  clientId : 'cb7b6024-65ea-46ee-b37b-5902f06eddc2',
  //  clientSecret : 'dHl8Q~9mpHRRMHF3rD.mVYKIeZOzNunbet5Fvdgi',
  //  powerbiScope: 'openid',
  //  resource: 'https://analysis.windows.net/powerbi/api',
  //  grant_types: 'client_credentials',
  //  username: '',

  //  sevicePrinciple:true

  // // workSpaceId: '9a6f8f78-e966-4b99-a4ac-8490fed54ce0',
  // // reportId: '2f400afe-d99b-468d-ab7d-e48192587bff',
  // // tenant_id: '513294a0-3e20-41b2-a970-6d30bf1546fa',
  // // clientId: 'fb22c5f9-ec27-4e71-bd0c-841806cac192',
  // // clientSecret: 'r.38Q~pxIn.zfNpCFWsAlCqAiRWM9oOk3MgjYa6l',
  // // powerbiScope: 'openid',
  // // username: '',
  // // resource: 'https://analysis.windows.net/powerbi/api',
  // // grant_types: 'client_credentials',


   // url1:"http://localhost:8080",
  // url:"http://localhost:8080",


  // url1:"https://uat.vendorandproductevaluationtool.pwc.in/api",
  // url:"https://uat.vendorandproductevaluationtool.pwc.in/api",


  // login_url: 'https://login-stg.pwc.com/openam/oauth2/authorize',
  // reponse_type: 'code',
  // client_id: 'urn:ipzjlvwvaswv001.pwcglb.com',
  // // redirect_url:'http://localhost:4200',
  // redirect_url: 'https://uat.vendorandproductevaluationtool.pwc.in',
  // scope: 'openid',
  // grant_type: 'authorization_code',
  // secret: 'MEq6SgAGzRknnq5QLKWZ',
  // access_token: 'https://login-stg.pwc.com/openam/oauth2/access_token',
  // user_info: 'https://login-stg.pwc.com/openam/oauth2/userinfo',

  // // power bi variables
  // workSpaceId : 'dcca0b8c-4838-4745-8980-e81548dae356',
  // reportId : '96eed3cd-2ff3-441e-9b2b-e3afb3b674e8',
  // tenant_id : '513294a0-3e20-41b2-a970-6d30bf1546fa',
  // clientId : 'cb7b6024-65ea-46ee-b37b-5902f06eddc2',
  // clientSecret : 't768Q~Dl8kWj9Zb8mkihE6t.X3DpTGGR5CRtycuw',
  // powerbiScope: 'openid',
  // username: '',
  // resource: 'https://analysis.windows.net/powerbi/api',
  // grant_types: 'client_credentials',
  // sevicePrinciple:true



  url1:'#{BACKEND_URL}#/api',
  url:'#{BACKEND_URL}#/api',


  login_url: '#{IDAM_LOGIN_URL}#',
  reponse_type: '#{IDAM_REPONSE_TYPE}#',
  client_id: '#{IDAM_CLIENT_ID}#',
  redirect_url: '#{IDAM_REDIRECT_URL}#',
  scope: '#{IDAM_SCOP}#',
  grant_type: '#{IDAM_GRANT_TYPE}#',
  secret: '#{IDAM_SECRET}#',
  access_token: '#{IDAM_ACCESS_TOKEN}#',
  user_info: '#{IDAM_USER_INFO}#',

  // power bi variables
  workSpaceId : '#{PB_WORKSPACE_ID}#',
  reportId : '#{PB_REPORT_ID}#',
  tenant_id : '#{PB_TENANT_ID}#',
  clientId : '#{PB_CLIENT_ID}#',
  clientSecret : '#{PB_CLIENT_SECRET}#',
  powerbiScope: '#{PB_SCOP}#',
  username: '',
  resource: '#{PB_RESOURCE}#',
  grant_types: '#{PB_GRANT_TYPE}#',
  viewer: 'Pwc_Viewer',
  sevicePrinciple:true
};
