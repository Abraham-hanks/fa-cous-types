import { HttpStatusCode } from "axios";
import { BazeError, Endpoint, HttpMethods } from "../../generic";
import { ICustomer, IMerchant } from "../models";
import {IStore} from "../../stores";

export interface IFetchProfileResponse {
    customer: IMerchant,
	stores: Array<IStore>
}

export const FetchProfileErrors: {
    invalidMerchant: BazeError
} = {
	invalidMerchant: {
		statusCode: HttpStatusCode.BadRequest,
        code: 'INVALID_MERCHANT',
		data: null,
		message: `Invalid merchant requested`,
		recommendedActions: [
			`Contact support`
		]
	}
};

export const ProfileEndpoint: Endpoint = {
    path: '/profile',
    fullPath: '/merchants/profile',
    parentModule: '/merchants',
    method: HttpMethods.Patch
}