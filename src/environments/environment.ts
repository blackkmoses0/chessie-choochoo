// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stationInformation: 'https://ms-metro.azurewebsites.net/station-information',
  arrivalTimes: 'https://ms-metro.azurewebsites.net/arrival-times',
  stationHours: 'https://ms-metro.azurewebsites.net/station-hours',
  stationRoute: 'https://ms-metro.azurewebsites.net/station-route',
  stationList: 'https://ms-metro.azurewebsites.net/station-list'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
