import {config} from '../config';
import {IServiceRequest} from "../classes/serviceRequest";
import {IServiceResponse} from "../classes/serviceResponse";
import * as ax from "axios";
import {AxiosResponse} from "axios";
import {IMessage} from "../classes/message";
import {IUser} from "../classes/user";
const axios = ax.default;
export class APIService{

    constructor(){

    }


    private remoteSend(iRequest:IServiceRequest, callBack:(response:IServiceResponse<any>)=>any)
    {
        axios.post<IServiceResponse<any>>(config.API.REMOTE_URL, iRequest)
        .then(function (response:AxiosResponse<IServiceResponse<any>>) {
            callBack(response.data);
        })
        .catch(function (error) {
            const res:IServiceResponse<any> = new class implements IServiceResponse<any> {
                data: any = null;
                message: string = error.toString();
                status: boolean = false;
            };
            callBack(res);
        });
    }

    public getMessages(callBack: (messages: Promise<IMessage[]>)=>any){
        //get token from localstorage
        const token = localStorage.getItem(config.APP.TOKEN_KEY);
        if(!token)
        {
            const iRequest:IServiceRequest = new class implements IServiceRequest {
                context: string = config.API.CONTEXT.GETMESSAGES;
                data: any = {
                    token:token
                };
            };
            this.remoteSend(iRequest, (iResponse:IServiceResponse<IMessage[]>)=>{
                const promise = new Promise<IMessage[]>((resolve,reject)=>{
                    if(iResponse.status)
                    {
                        resolve(iResponse.data);
                    }
                    else{
                        reject(iResponse.message);
                    }
                });
                callBack(promise);

            });
        }
        else{
            callBack(null);
        }

    }
    public getAllUsers(callBack: (messages: Promise<IUser[]>)=>any){
        //get token from localstorage
        const token = localStorage.getItem(config.APP.TOKEN_KEY);
        if(!token)
        {
            const iRequest:IServiceRequest = new class implements IServiceRequest {
                context: string;
                data: any;
            };
            iRequest.context = config.API.CONTEXT.GETALLUSERS;
            iRequest.data = {
                token:token
            };
            this.remoteSend(iRequest, (iResponse:IServiceResponse<IUser[]>)=>{
                const promise = new Promise<IUser[]>((resolve,reject)=>{
                    if(iResponse.status)
                    {
                        resolve(iResponse.data);
                    }
                    else{
                        reject(iResponse.message);
                    }
                });
                callBack(promise);

            });
        }
        else{
            callBack(null);
        }

    }





}
