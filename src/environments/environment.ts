// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const baseurl = "http://localhost:8090";

export const environment = {
  production: false,
  AuthApiUrl: "http://user-pc:8384", 
  AdminApiUrl: baseurl,
  EventApiUrl: baseurl,
  FeedbackApiUrl: baseurl,
};

// export const environment = {
//   production: false,
//   AuthApiUrl: "http://localhost:8087", //http://user-pc:8384
//   AdminApiUrl: "http://localhost:8085",
//   EventApiUrl: "http://localhost:8086",
//   FeedbackApiUrl: "http://localhost:8089"
// };


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
