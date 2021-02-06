import {MiddlewareSequence} from '@loopback/rest';

// import {AuthenticateFn, AuthenticationBindings, AUTHENTICATION_STRATEGY_NOT_FOUND, USER_PROFILE_NOT_FOUND} from '@loopback/authentication';
// import {inject} from '@loopback/core';
// import {SequenceHandler} from '@loopback/rest';

export class MySequence extends MiddlewareSequence { }

// export class MySequence extends SequenceHandler {

//   constructor(
//     @inject(AuthenticationBindings.AUTH_ACTION)
//     protected authenticateRequest: AuthenticateFn,
//   ) { }

//   async handle(context: RequestContext) {
//     try {
//       const {request, response} = context;
//       const route = this.findRoute(request);
//       // - enable JWT Auth
//       // Call authenticacion action
//       // ------ ADD THIS LINES ------
//       await this.authenticateRequest(request);
//       const args = await this.parseParams(request, route);
//       const result = await this.invoke(route, args);
//       this.send(response, result);
//     } catch (err) {
//       // ------ ADD THIS SNIPPET ------
//       // if error is coming from the JWT authenticacion extension
//       // make  the statusCode 401
//       if (
//         err === AUTHENTICATION_STRATEGY_NOT_FOUND ||
//         err.code === USER_PROFILE_NOT_FOUND
//       ) {
//         Object.assign(err, {statusCode: 401 /* Unauthorized */});
//       }
//       // ------ END SNIPPET ------
//       this.reject(context, err);
//     }
//   }
// }
