import UserController from '@src/controller/UserController';
import HttpMethod from '@src/enum/HttpMethod';
import RouteMethod from '@src/type/RouteMethod';
import User from '@src/type/User';
import AbstractRoute from './AbstractRoute';

class UserRoute extends AbstractRoute<UserController, User> {
    protected allowedRouteMethods: RouteMethod<UserController>[] = [
        {
            httpMethod: HttpMethod.POST,
            path: '/user/',
            methodName: 'create',
            standardCode: 501
        },
        {
            httpMethod: HttpMethod.GET,
            path: '/user',
            methodName: 'find',
            standardCode: 501
        },        
        {
            httpMethod: HttpMethod.GET,
            path: '/user/:userId',
            methodName: 'findById',
            standardCode: 501
        },
        {
            httpMethod: HttpMethod.PATCH,
            path: '/user/:userId',
            methodName: 'setUserStatus',
            standardCode: 501
        }
    ];
    
}

export default UserRoute;
